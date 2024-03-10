const texts1 = [
  "You need to send a confidential document to a colleague. Which of the following would be the safest method?",
  "You have sensitive information to share with a client. What is the most secure way to transmit it?",
  "You need to share confidential financial documents with your accountant. What is the safest method?",
];
const getRandomText1 = () => texts1[Math.floor(Math.random() * texts1.length)];

const texts2 = [
  "What's a crucial aspect to consider when composing an email subject line?",
  "You're drafting an email to your supervisor regarding a project update. What should you prioritize when crafting the subject line?",
  "You're preparing to send a newsletter to your company's subscribers. What's the most important consideration when crafting the subject line?",
];
const getRandomText2 = () => texts2[Math.floor(Math.random() * texts2.length)];

const texts3 = [
  "You've received an urgent email that seems suspicious, asking for personal information. What's the best action to take?",
  "You encounter a suspicious website prompting you to enter personal details to claim a prize. What should you do?",
  "You receive an unexpected email claiming to be from a reputable organization, requesting sensitive information. What's the most appropriate response?",
];
const getRandomText3 = () => texts3[Math.floor(Math.random() * texts3.length)];

const texts4 = [
  "When engaging with others on social media, which approach is most likely to foster positive interactions?",
  "You're participating in an online discussion forum where opinions vary widely. How should you approach responding to others?",
  "You're attending a community meeting where different viewpoints on a proposed project are being discussed. How should you engage with others during the meeting?",
];
const getRandomText4 = () => texts4[Math.floor(Math.random() * texts4.length)];

const texts5 = [
  "Which of the following is a good practice for managing your email inbox efficiently?",
  "You've just received a flood of emails while working on a project with tight deadlines. What's the best strategy to ensure you stay productive while managing your inbox?",
  "You're managing a busy workday with various tasks, including checking your email. What's a recommended approach for handling your inbox effectively?",
];
const getRandomText5 = () => texts5[Math.floor(Math.random() * texts5.length)];

const texts6 = [
  "You're considering using a new internet-based communication tool for your team. What should you prioritize when making this decision?",
  "Your team is exploring options for a new project management tool. What factor should you prioritize when making the decision?",
  "You're tasked with selecting a new software for your team's daily operations. What should be your primary consideration?",
];
const getRandomText6 = () => texts6[Math.floor(Math.random() * texts6.length)];

const texts7 = [
  "How can you ensure that your social media posts reach the intended audience?",
  "You're planning to launch a new product on social media and want to maximize its visibility. What approach should you focus on?",
  "You're aiming to increase engagement on your social media posts. What strategy should you prioritize?",
];
const getRandomText7= () => texts7[Math.floor(Math.random() * texts7.length)];

const texts8 = [
  "You want to share a large file with a client. Which method would be the most efficient and professional?",
  "You're collaborating on a project with a team member who works remotely. How should you share a large document with them?",
  "You need to send a presentation to your colleague, including large files and graphics. What's the most efficient and professional way to share it?",
];
const getRandomText8 = () => texts8[Math.floor(Math.random() * texts8.length)];

const texts9 = [
  "What's an essential consideration when selecting an internet-based communication tool for remote team collaboration?",
  "You're tasked with selecting a communication tool for your remote team. What's a critical factor to consider during the decision-making process?",
  "You're leading a project and need to choose a software tool for team collaboration. What should be a top priority in your decision-making process?",
];
const getRandomText9 = () => texts9[Math.floor(Math.random() * texts9.length)];

const texts10 = [
  "You received an email claiming a security breach in a popular cloud storage service. How can you assess the reliability of this news?",
  "You come across a blog post discussing a new health trend claiming miraculous benefits. What's the most effective method to assess the reliability of this information?",
  "You stumbled upon an article warning about a potential security threat to your favorite social media platform. What's the best approach to evaluate the credibility of this information?",
];
const getRandomText10 = () => texts10[Math.floor(Math.random() * texts10.length)];

const questions = [
    { id: 1,  
      text: getRandomText1(),
      choices: ["Sending it via email", "Sharing it through a public link on social media", "Using a secure file-sharing platform with end-to-end encryption"],
      correctChoice: 2 },
    { id: 2, 
      text: getRandomText2(),
      choices: ["Using excessive emojis for attention", "Keeping it vague to entice curiosity", "Clearly summarizing the email's content and purpose"],                                   
      correctChoice: 2 },
    { id: 3, 
      text: getRandomText3(),
        choices: ["Reply with the requested information immediately", "Click on any links provided to verify the sender", "Contact the sender using a known, separate communication method to confirm legitimacy"],           
      correctChoice: 2 },
    { id: 4, 
      text: getRandomText4(),
      choices: ["Sharing controversial opinions to spark debate", "Responding to comments with empathy and respect", "Ignoring all comments and messages received"],                       
      correctChoice: 1 },
    { id: 5, 
      text: getRandomText5(),
      choices: ["Leaving all emails unread until you have time to respond to each one", "Deleting all emails without reading them", "Setting aside specific times to check and respond to emails"], 
      correctChoice: 2 },
    { id: 6, 
      text: getRandomText6(),
      choices: ["Choosing the tool with the most features, regardless of cost", "Selecting a tool that aligns with your team's needs and security requirements", "Using multiple tools simultaneously to cover all communication needs"],                                    
      correctChoice: 1 },
    { id: 7, 
      text: getRandomText7(),
      choices: ["Posting at random times throughout the day", "Using hashtags unrelated to your content", "Understanding your audience's demographics and preferences"],                                   
      correctChoice: 2 },
    { id: 8, 
      text: getRandomText8(),
      choices: ["Sending it as an email attachment", "Using a cloud storage service and sharing the link securely", "Posting it on your personal social media account for them to download"],           
      correctChoice: 1 },
    { id: 9, 
      text: getRandomText9(),
      choices: ["Choosing the cheapest option available", "Ensuring it integrates seamlessly with existing tools and workflows", "Selecting a tool with the fanciest user interface"],                       
      correctChoice: 1 },
    { id: 10, 
      text: getRandomText10(),
      choices: ["Verify the credibility of the news source", "Consider the emotional tone of the article", "Count the number of hyperlinks within the article"], 
      correctChoice: 0 },
  ];
  
  export default questions;
  