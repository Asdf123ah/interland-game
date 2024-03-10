const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { ObjectId } = require('mongodb'); // Import ObjectId from MongoDB

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://clustergame001:clustergame001@clustergame.suvmi1j.mongodb.net/"
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");

  createUserStatus();
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  categories: [
    {
      category: String,
      categoryAttempt: Number,
      bestScore: Number,
      bestTime: Number,
      aveScore: Number,
      aveTime: Number,
      categoryAttemptDetail: [
        {
          score: {
            bestScore: Number,
            lowestScore: Number,
          },
          time: {
            bestTime: Number,
            lowestTime: Number,
          },
          questionAttempts: {
            question1Attempt: {
              isCorrectQuestion1: Boolean,
              question1Time: Number,
            },

            question2Attempt: {
              isCorrectQuestion2: Boolean,
              question2Time: Number,
            },

            question3Attempt: {
              isCorrectQuestion3: Boolean,
              question3Time: Number,
            },

            question4Attempt: {
              isCorrectQuestion4: Boolean,
              question4Time: Number,
            },

            question5Attempt: {
              isCorrectQuestion5: Boolean,
              question5Time: Number,
            },

            question6Attempt: {
              isCorrectQuestion6: Boolean,
              question6Time: Number,
            },

            question7Attempt: {
              isCorrectQuestion7: Boolean,
              question7Time: Number,
            },

            question8Attempt: {
              isCorrectQuestion8: Boolean,
              question8Time: Number,
            },

            question9Attempt: {
              isCorrectQuestion9: Boolean,
              question9Time: Number,
            },

            question10Attempt: {
              isCorrectQuestion10: Boolean,
              question10Time: Number,
            },
          },
        },
      ],
    },
  ],
});
const User = mongoose.model("User", userSchema);

async function createUserStatus() {
  try {
    // Convert raw data to categorized data
    const pipeline = [
      {
        $unwind: "$categories"
      },
      {
        $sort: { "categories.categoryName": 1 }
      },
      {
        $unwind: "$categories.categoryAttemptDetail"
      },
      {
        $addFields: {
          currCorrectAnswer: {
            $sum: [
              { $cond: ["$categories.categoryAttemptDetail.questionAttempts.question1Attempt.isCorrectQuestion1", 1, 0] },
              { $cond: ["$categories.categoryAttemptDetail.questionAttempts.question2Attempt.isCorrectQuestion2", 1, 0] },
              { $cond: ["$categories.categoryAttemptDetail.questionAttempts.question3Attempt.isCorrectQuestion3", 1, 0] },
              { $cond: ["$categories.categoryAttemptDetail.questionAttempts.question4Attempt.isCorrectQuestion4", 1, 0] },
              { $cond: ["$categories.categoryAttemptDetail.questionAttempts.question5Attempt.isCorrectQuestion5", 1, 0] },
              { $cond: ["$categories.categoryAttemptDetail.questionAttempts.question6Attempt.isCorrectQuestion6", 1, 0] },
              { $cond: ["$categories.categoryAttemptDetail.questionAttempts.question7Attempt.isCorrectQuestion7", 1, 0] },
              { $cond: ["$categories.categoryAttemptDetail.questionAttempts.question8Attempt.isCorrectQuestion8", 1, 0] },
              { $cond: ["$categories.categoryAttemptDetail.questionAttempts.question9Attempt.isCorrectQuestion9", 1, 0] },
              { $cond: ["$categories.categoryAttemptDetail.questionAttempts.question10Attempt.isCorrectQuestion10", 1, 0] }
            ]
          },
          totalAttempts: "$categories.categoryAttempt",
          totalQuestions: { $multiply: ["$categories.categoryAttempt", 10] }
        }
      },
      {
        $group: {
          _id: {
            userId: "$_id",
            category: "$categories.category"
          },
          name: { $first: "$name" },
          totalAttempts: { $first: "$totalAttempts" },
          currCorrectAnswer: { $last: "$currCorrectAnswer" },
          prevAttemptsCorrect: { $push: "$currCorrectAnswer" },
          categoryAttempt: { $first: "$categories.categoryAttempt" }
        }
      },
      {
        $addFields: {
          prevCorrectAnswer1: {
            $cond: {
              if: { $eq: ["$categoryAttempt", 1] },
              then: 0,
              else: { $arrayElemAt: ["$prevAttemptsCorrect", { $subtract: [{ $size: "$prevAttemptsCorrect" }, 2] }] }
            }
          }
        }
      },
      {
        $addFields: {
          isWheelSpinning: {
            $cond: {
              if: {
                $or: [
                  { $and: [{ $eq: ["$categoryAttempt", 1] }, { $lt: ["$currCorrectAnswer", 7] }] },
                  { $and: [{ $gte: ["$categoryAttempt", 2] }, { $lt: ["$currCorrectAnswer", 7] }, { $lte: ["$currCorrectAnswer", "$prevCorrectAnswer1"] }] }
                ]
              },
              then: true,
              else: false
            }
          }
        }
      },
      {
        $group: {
          _id: "$_id.userId",
          name: { $first: "$name" },
          totalAttempts: { $sum: "$totalAttempts" }, 
          categories: {
            $push: {
              categoryName: "$_id.category",
              categoryAttempt: "$categoryAttempt",
              currCorrectAnswer: "$currCorrectAnswer",
              prevCorrectAnswer1: "$prevCorrectAnswer1",
              isWheelSpinning: "$isWheelSpinning"
            }
          }
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          totalAttempts: 1,
          categories: {
            $switch: {
              branches: [
                { case: { $eq: ["$categories.categoryName", "Basic Computer and Mobile Skill"] }, then: "$categories" },
                { case: { $eq: ["$categories.categoryName", "Internet Skill"] }, then: "$categories" },
                { case: { $eq: ["$categories.categoryName", "Communication Skill"] }, then: "$categories" },
                { case: { $eq: ["$categories.categoryName", "Information Literacy Skill"] }, then: "$categories" }
              ],
              default: "$categories" // Add a default branch to handle unmatched category names
            }
          }
        }
      }
    ];
    

    // Run aggregation pipeline
    const result = await User.aggregate(pipeline).allowDiskUse(true).exec();

    if (!result || result.length === 0) {
      console.log("No data found for user status.");
      return;
    }

    const bulkOperations = result.map((doc) => ({
      replaceOne: {
        filter: { _id: doc._id },
        replacement: doc,
        upsert: true,
      },
    }));

    // Perform bulk write operation with unordered option
    await connection.db
      .collection("userStatus")
      .bulkWrite(bulkOperations, { ordered: false });

    console.log("User status collection created and populated successfully.");

    // Set up change stream to listen for changes in the users collection
    const usersCollection = connection.db.collection("users");
    const changeStream = usersCollection.watch();

    changeStream.on("change", async (change) => {
      try {
        const userId = change.documentKey._id;
        const user = await usersCollection.findOne({ _id: userId });

        if (user) {
          await createUserStatus();
        }
      } catch (error) {
        console.error("Error updating user status collection:", error);
      }
    });
  } catch (error) {
    console.error("Error creating user status collection:", error);
  }
}


// Define a new route to handle fetching user status data
app.get("/user-status/:userId", async (req, res) => {
  try {
    const userId = req.params.userId; // Extract userId from URL parameters

    // Convert the ID string to an ObjectId
    const objectId = new ObjectId(userId);

    // Query the userStatus collection to retrieve data with the specified ID
    const userStatusData = await connection.db.collection("userStatus").findOne({ _id: objectId });

    // Log the retrieved data 
    console.log(userStatusData);

    // Send the retrieved data as the response
    res.json(userStatusData);

  } catch (error) {
    console.error("Error fetching user status data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/user/register", async (req, res) => {
  const { name, age, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      age,
      email,
      password: hashedPassword,
      categories: [],
    });
    const savedUser = await newUser.save();
    res.status(201).json({
      _id: savedUser._id,
      name: savedUser.name,
      age: savedUser.age,
      email: savedUser.email,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/user/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    res.status(200).json({
      _id: user._id,
      name: user.name,
      age: user.age,
      email: user.email,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/reset-password", async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password reset successful", userId: user._id });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/user/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user information:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/user/updateCategories/:userId", async (req, res) => {
  const userId = req.params.userId;
  const { category } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const existingCategory = user.categories.find(
      (c) => c.category === category
    );

    if (existingCategory) {
      existingCategory.categoryAttempt += 1;
      existingCategory.categoryAttemptDetail.push(createNewAttempt());
    } else {
      user.categories.push({
        category: category,
        categoryAttempt: 1,
        bestScore: 0,
        bestTime: 0,
        aveScore: 0,
        aveTime: 0,
        categoryAttemptDetail: [createNewAttempt()],
      });
    }

    const updatedUser = await user.save();
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user categories:", error);
    res.status(500).send("Internal Server Error");
  }
});

function createNewAttempt() {
  return {
    score: {
      bestScore: 0,
      lowestScore: 0,
    },
    time: {
      bestTime: 0,
      lowestTime: 0,
    },
    questionAttempts: {
      question1Attempt: {
        isCorrectQuestion1: false,
        question1Time: 0,
      },
      question2Attempt: {
        isCorrectQuestion2: false,
        question2Time: 0,
      },
      question3Attempt: {
        isCorrectQuestion3: false,
        question3Time: 0,
      },
      question4Attempt: {
        isCorrectQuestion4: false,
        question4Time: 0,
      },
      question5Attempt: {
        isCorrectQuestion5: false,
        question5Time: 0,
      },
      question6Attempt: {
        isCorrectQuestion6: false,
        question6Time: 0,
      },
      question7Attempt: {
        isCorrectQuestion7: false,
        question7Time: 0,
      },
      question8Attempt: {
        isCorrectQuestion8: false,
        question8Time: 0,
      },
      question9Attempt: {
        isCorrectQuestion9: false,
        question9Time: 0,
      },
      question10Attempt: {
        isCorrectQuestion10: false,
        question10Time: 0,
      },
    },
  };
}

app.post("/api/user/updateCategoryScoreAndTime/:userId", async (req, res) => {
  const userId = req.params.userId;
  const { category, score, time, questionAttempts } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const categoryIndex = user.categories.findIndex(
      (cat) => cat.category === category
    );

    if (categoryIndex === -1) {
      return res
        .status(404)
        .json({ message: "Category not found for the user" });
    }

    const categoryData = user.categories[categoryIndex];
    const categoryAttempt =
      categoryData.categoryAttemptDetail[
        categoryData.categoryAttemptDetail.length - 1
      ];

    if (score.bestScore > categoryData.bestScore) {
      categoryData.bestScore = score.bestScore;
    }

    if (
      time.bestTime !== 0 &&
      (categoryData.bestTime === 0 || time.bestTime < categoryData.bestTime)
    ) {
      categoryData.bestTime = time.bestTime;
    }

    categoryAttempt.score = score;
    categoryAttempt.time = time;
    categoryAttempt.questionAttempts = questionAttempts;

    let totalBestScore = 0;
    let lowestScore = score.bestScore;
    let totalBestTime = 0;
    let lowestTime = time.bestTime;

    for (const attempt of categoryData.categoryAttemptDetail) {
      totalBestScore += attempt.score.bestScore;
      totalBestTime += attempt.time.bestTime;

      if (attempt.score.bestScore < lowestScore) {
        lowestScore = attempt.score.bestScore;
      }

      if (attempt.time.bestTime < lowestTime) {
        lowestTime = attempt.time.bestTime;
      }
    }

    const categoryAttemptCount = categoryData.categoryAttemptDetail.length;
    const aveScore =
      categoryAttemptCount > 0
        ? (totalBestScore / categoryAttemptCount).toFixed(2)
        : 0;
    const aveTime =
      categoryAttemptCount > 0
        ? (totalBestTime / categoryAttemptCount).toFixed(2)
        : 0;

    categoryData.aveScore = aveScore;
    categoryData.aveTime = aveTime;

    categoryData.totalBestScore = totalBestScore;
    categoryData.aveScore = aveScore;
    user.totalBestTime = totalBestTime;
    user.aveTime = aveTime;
    categoryAttempt.score.lowestScore = lowestScore;
    categoryAttempt.score.aveScore = aveScore;
    categoryAttempt.time.lowestTime = lowestTime;
    categoryAttempt.time.aveTime = aveTime;

    await user.save();

    res.status(200).json({
      message:
        "Category score, time, total best score, and average score updated successfully",
    });
  } catch (error) {
    console.error("Error updating category score and time:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/user/:userId/winrate", async (req, res) => {
  const userId = req.params.userId;
  const category = req.query.category;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    let totalCorrectAnswers = 0;
    let totalQuestions = 0;

    const categoryData = user.categories.find(
      (cat) => cat.category === category
    );

    if (!categoryData) {
      return res.status(404).json({ error: "Category not found" });
    }

    categoryData.categoryAttemptDetail.forEach((attempt) => {
      for (let i = 1; i <= 10; i++) {
        const questionAttempt = attempt.questionAttempts[`question${i}Attempt`];
        if (questionAttempt && questionAttempt[`isCorrectQuestion${i}`]) {
          totalCorrectAnswers++;
        }
        totalQuestions++;
      }
    });

    const winRate = (totalCorrectAnswers / totalQuestions) * 100;

    res.json({
      category: category,
      winRate: winRate.toFixed(2),
      totalCorrectAnswers: totalCorrectAnswers,
      totalQuestions: totalQuestions,
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/user/:userId/categoryAttempt", async (req, res) => {
  const userId = req.params.userId;
  const category = req.query.category;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const categoryData = user.categories.find(
      (cat) => cat.category === category
    );

    if (!categoryData) {
      return res.status(404).json({ error: "Category not found" });
    }

    const { categoryAttempt, bestScore, bestTime, aveScore, aveTime } =
      categoryData;

    res.json({ categoryAttempt, bestScore, bestTime, aveScore, aveTime });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
