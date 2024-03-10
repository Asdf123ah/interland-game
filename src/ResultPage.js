import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./ResultPage.css";
import BackModal from "./Modal/BackModal";
import sycuresLogo from "./Photos/gamePictureLogo.png";

function ResultPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const location = useLocation();
  const {
    isCorrectQuestions,
    adjustedScore,
    time,
    totalQuestions,
    category,
    question1Time,
    question2Time,
    question3Time,
    question4Time,
    question5Time,
    question6Time,
    question7Time,
    question8Time,
    question9Time,
  } = location.state || {};
  const [showBackModal, setShowBackModal] = useState(false);
  const isCorrectQuestionsArray = Object.values(isCorrectQuestions);

  const question1 = isCorrectQuestionsArray[0];
  const question2 = isCorrectQuestionsArray[1];
  const question3 = isCorrectQuestionsArray[2];
  const question4 = isCorrectQuestionsArray[3];
  const question5 = isCorrectQuestionsArray[4];
  const question6 = isCorrectQuestionsArray[5];
  const question7 = isCorrectQuestionsArray[6];
  const question8 = isCorrectQuestionsArray[7];
  const question9 = isCorrectQuestionsArray[8];
  const question10 = isCorrectQuestionsArray[9];

  const handleBackButtonClick = () => {
    setShowBackModal(true);
  };

  const handleCloseBackModal = () => {
    setShowBackModal(false);
  };

  const handleProceedToCategorySelection = () => {
    handleCloseBackModal();
    navigate(`/category-selection/${userId}`);
  };

  const updateScoreTime = useCallback(async () => {
    try {
      await axios.post(
        `http://localhost:4000/api/user/updateCategoryScoreAndTime/${userId}`,
        {
          category: category,
          score: {
            bestScore: adjustedScore,
            lowestScore: adjustedScore,
          },
          time: {
            bestTime: time,
            lowestTime: time,
          },
          questionAttempts: {
            question1Attempt: {
              isCorrectQuestion1: question1,
              question1Time: question1Time,
            },
            question2Attempt: {
              isCorrectQuestion2: question2,
              question2Time: question2Time,
            },
            question3Attempt: {
              isCorrectQuestion3: question3,
              question3Time: question3Time,
            },
            question4Attempt: {
              isCorrectQuestion4: question4,
              question4Time: question4Time,
            },
            question5Attempt: {
              isCorrectQuestion5: question5,
              question5Time: question5Time,
            },
            question6Attempt: {
              isCorrectQuestion6: question6,
              question6Time: question6Time,
            },
            question7Attempt: {
              isCorrectQuestion7: question7,
              question7Time: question7Time,
            },
            question8Attempt: {
              isCorrectQuestion8: question8,
              question8Time: question8Time,
            },
            question9Attempt: {
              isCorrectQuestion9: question9,
              question9Time: question9Time,
            },
            question10Attempt: {
              isCorrectQuestion10: question10,
              question10Time:
                time -
                (question1Time +
                  question2Time +
                  question3Time +
                  question4Time +
                  question5Time +
                  question6Time +
                  question7Time +
                  question8Time +
                  question9Time),
            },
          },
        }
      );
    } catch (error) {
      console.error(
        "Error updating score, time, and question attempts:",
        error
      );
    }
  }, [
    userId,
    category,
    adjustedScore,
    time,
    question1,
    question1Time,
    question2,
    question2Time,
    question3,
    question3Time,
    question4,
    question4Time,
    question5,
    question5Time,
    question6,
    question6Time,
    question7,
    question7Time,
    question8,
    question8Time,
    question9,
    question9Time,
    question10,
  ]);

  console.log("Questions1: ", question1);
  console.log("Questions2: ", question2);
  console.log("Questions3: ", question3);
  console.log("Questions4: ", question4);
  console.log("Questions5: ", question5);
  console.log("Questions6: ", question6);
  console.log("Questions7: ", question7);
  console.log("Questions8: ", question8);
  console.log("Questions9: ", question9);
  console.log("Questions10: ", question10);


  useEffect(() => {
    console.log("Category in ResultPage:", category);
    updateScoreTime();
  }, [category, updateScoreTime]);

  const getQuestionLabel = (questionNumber) => {
    switch (questionNumber) {
      case 1:
        return "Computer Performance";
      case 2:
        return "Wifi Connectivity Issues";
      case 3:
        return "Web Browser Problems";
      case 4:
        return "Desktop and Taskbar Issues";
      case 5:
        return "Mobile Wifi Connectivity";
      case 6:
        return "Mobile Data Recovery";
      case 7:
        return "Mobile App Performance";
      case 8:
        return "Mobile Battery Life";
      case 9:
        return "Mobile App Crashes";
      case 10:
        return "File Recovery";
      default:
        return "";
    }
  };
  

  const incorrectQuestionIndex = isCorrectQuestionsArray.findIndex(
    (isCorrect) => !isCorrect
  );

  const incorrectQuestionLabel = getQuestionLabel(incorrectQuestionIndex);


  return (
    <div className="containerResultPage">
      <button
        className="backButtonResultPage"
        onClick={handleBackButtonClick}
      />
      <img
        className="sycuresLogoGameResultPage"
        src={sycuresLogo}
        alt="Sycures Logo"
      />
      <div className="resultBoxResultPageBG">
        <div className="resultBoxResultPage">
          <div className="column">
            <p className="headerTextResultPage">YOUR SCORE:</p>
            <div className="scoreBoxResultPage">
              {adjustedScore}/{totalQuestions}
            </div>
            <p className="headerTextResultPage">YOUR TIME:</p>
            <div className="timeBoxResultPage">{time} seconds</div>

          </div>
          <div className="column">
            <div className="messageResultPage">
              <p>Message:</p>
              {isCorrectQuestionsArray.map((isCorrect, index) => (
                !isCorrect && (
                  <div  className='messageResultPageMessage' key={index}>
                    You need to improve or focus on {getQuestionLabel(index + 1)}
                  </div>
                )
              ))}
            </div>
          </div>
          {showBackModal && (
            <BackModal
              onProceed={handleProceedToCategorySelection}
              onClose={handleCloseBackModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
