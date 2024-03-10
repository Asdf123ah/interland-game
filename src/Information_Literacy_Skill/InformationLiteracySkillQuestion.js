const texts1 = [
  "When researching a historical event online, what factors determine article credibility?",
  "You're browsing online for information about a medical condition. What should you consider to evaluate the credibility of the sources?",
  "You're researching investment opportunities online. What factors should you consider to assess the reliability of the information?",
];
const getRandomText1 = () => texts1[Math.floor(Math.random() * texts1.length)];

const texts2 = [
  "When encountering multiple blog posts about a software tool for your project, what helps most in assessing their reliability?",
  "You're exploring different reviews for a new smartphone model online. What factor should you prioritize to determine the reliability of the reviews?",
  "You're researching home workout routines online and come across several articles with varying levels of detail. What should you prioritize to assess the credibility of the information?",
];
const getRandomText2 = () => texts2[Math.floor(Math.random() * texts2.length)];

const texts3 = [
  "You're exploring workout routines online and find multiple fitness blogs suggesting different exercises. What's most important in assessing the reliability of these posts?",
  "You're researching healthy eating habits online and encounter various nutrition blogs offering dietary advice. What should you prioritize to evaluate the reliability of these blogs?",
  "You're planning a trip and browsing travel websites for recommendations on accommodations. What should you prioritize to assess the reliability of these websites?",
];
const getRandomText3 = () => texts3[Math.floor(Math.random() * texts3.length)];

const texts4 = [
  "When researching a new programming language online, what should you consider to evaluate the reliability of articles discussing its features and applications?",
  "You're interested in learning about a new programming framework and come across several articles discussing its features and applications. What should you prioritize to evaluate the reliability of these articles?",
  "You're researching the benefits of a specific dietary supplement and find various articles online discussing its effectiveness. What should you prioritize to evaluate the reliability of these articles?",
];
const getRandomText4 = () => texts4[Math.floor(Math.random() * texts4.length)];

const texts5 = [
  "When encountering conflicting information about climate change effects on two websites.",
  "You're comparing reviews for a new product on two different e-commerce websites, and they present conflicting opinions. How should you determine the reliability of the reviews?",
  "You're researching the benefits of a particular workout routine and find conflicting information on two fitness websites. What's the best approach to determine the reliability of the information?",
];
const getRandomText5 = () => texts5[Math.floor(Math.random() * texts5.length)];

const texts6 = [
  "You are researching machine learning algorithms online.",
  "You're exploring different websites for information about a new productivity tool. What should you prioritize to assess the reliability of these websites?",
  "You're researching the benefits of a particular dietary supplement online.",
];
const getRandomText6 = () => texts6[Math.floor(Math.random() * texts6.length)];

const texts7 = [
  "You want to verify the accuracy of a news article you found online.",
  "You're researching a new productivity app online and come across conflicting reviews on different websites.",
  "You're trying to determine the reliability of a blog post discussing a recent scientific discovery.",
];
const getRandomText7= () => texts7[Math.floor(Math.random() * texts7.length)];

const texts8 = [
  "When studying AI history, what's a valuable method to deepen your understanding beyond basic search results?",
  "You're passionate about learning a new skill, such as playing a musical instrument. What's a valuable method to deepen your understanding beyond basic tutorials?",
  "You're interested in learning about the history of ancient civilizations and their architectural marvels. What's a valuable method to deepen your understanding beyond basic search results?",
];
const getRandomText8 = () => texts8[Math.floor(Math.random() * texts8.length)];

const texts9 = [
  "You are researching cloud computing security online and find a few articles discussing different security measures.",
  "You're investigating the best practices for investing in stocks and encounter several articles offering advice. What should you prioritize to determine the reliability of the information?",
  "You're researching the latest trends in sustainable fashion and come across various articles discussing eco-friendly clothing options. What should you prioritize to determine the reliability of the information?",
];
const getRandomText9 = () => texts9[Math.floor(Math.random() * texts9.length)];

const texts10 = [
  "When seeking recent scientific studies on renewable energy sources, what's a recommended strategy to refine your search results?",
  "You're conducting research on emerging trends in digital marketing and want to find the most recent studies. What's a recommended strategy to refine your search results?",
  "You're looking for information on the latest developments in artificial intelligence for a research project. What's a recommended strategy to refine your search results?",
];
const getRandomText10 = () => texts10[Math.floor(Math.random() * texts10.length)];

const questions = [
    { id: 1,  
      text: getRandomText1(),
      choices: ["Website ads", "Author's credentials", "Emotional language"],
      correctChoice: 1 },
    { id: 2, 
      text: getRandomText2(),
      choices: ["Number of social media shares", "Date of publication", "Design/layout of the blog"],                                   
      correctChoice: 1 },
    { id: 3, 
      text: getRandomText3(),
        choices: ["Website layout and design", "Relevant citations and sources", "Use of vibrant colors and fonts"],           
      correctChoice: 1 },
    { id: 4, 
      text: getRandomText4(),
      choices: ["Number of images and infographics", "Reputation of the website", "Technical terminology and code examples given"],                       
      correctChoice: 2 },
    { id: 5, 
      text: getRandomText5(),
      choices: ["Website with the most visually appealing design.", "Cross-reference information from both websites with reliable sources.", "Avoid bias; select based on preconceived beliefs."], 
      correctChoice: 1 },
    { id: 6, 
      text: getRandomText6(),
      choices: ["Number of ads on the webpage", "Use of real-world case studies", "Use of flashy graphics and animations"],                                    
      correctChoice: 1 },
    { id: 7, 
      text: getRandomText7(),
      choices: ["Social media reactions", "Journalist's background", " Fascinating use of words"],                                   
      correctChoice: 1 },
    { id: 8, 
      text: getRandomText8(),
      choices: ["Limit research to a single source", "Explore academic sources, books, and documentaries", "Rely solely on opinion pieces and blog posts"],           
      correctChoice: 1 },
    { id: 9, 
      text: getRandomText9(),
      choices: ["Number of ads displayed on the webpage", "Use of references to industry-standard security protocols", "Use of bold and colorful text in the articles"],                       
      correctChoice: 1 },
    { id: 10, 
      text: getRandomText10(),
      choices: ["Use broad keywords like 'renewable energy' without a timeframe.", "Use advanced filters to narrow results by date and scholarly sources.", "Trust the initial search results without further inquiry."], 
      correctChoice: 1 },
  ];
  
  export default questions;
  