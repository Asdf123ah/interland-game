const texts1 = [
  "You receive an email from what appears to be your bank, urgently requesting you to click on a link to verify your account details due to a security breach.",
  "You receive a text message claiming to be from your mobile service provider, stating that you've won a prize and need to click on a link to claim it.",
  "You receive an email notification congratulating you for winning a lottery you never entered, and it asks for your personal information to claim the prize. What's the best course of action?",
];
const getRandomText1 = () => texts1[Math.floor(Math.random() * texts1.length)];

const texts2 = [
  "While online, you encounter a pop-up message stating your computer has a virus and prompting you to download antivirus software by clicking a link.",
  "While browsing the internet, you come across a message claiming you've won a free vacation package and need to enter personal information to claim it.",
  "You receive a pop-up message while browsing online, stating that your computer has a virus and prompting you to download antivirus software by clicking a link. What's the best action to take?",
];
const getRandomText2 = () => texts2[Math.floor(Math.random() * texts2.length)];

const texts3 = [
  "You receive an email claiming that you've won a lottery you never entered and asking for personal information to claim the prize.",
  "While browsing online, you come across a website offering free trials for a product but requires you to enter your credit card information to access it. What should you do?",
  "You receive a phone call from an unknown number informing you that you've won a contest you never entered and asking for personal information to process the prize.",
];
const getRandomText3 = () => texts3[Math.floor(Math.random() * texts3.length)];

const texts4 = [
  "You find a website offering free downloads of paid software while you're browsing.",
  "While browsing online, you come across a pop-up advertisement claiming that your device has been infected with a virus and prompting you to download a software to remove it for free.",
  "You receive a phone call from an unknown number informing you that you've won a luxurious vacation package to an exotic destination. To claim the prize, they request your personal information. What's the best course of action?",
];
const getRandomText4 = () => texts4[Math.floor(Math.random() * texts4.length)];

const texts5 = [
  "You receive a message on social media from a person claiming to be a friend, asking for your password to access a shared document.",
  "You receive an email from a colleague requesting your login credentials to access a shared project folder due to technical issues.",
  "You receive a message on a social media platform from a friend, asking for your password to help troubleshoot an issue with their account.",
];
const getRandomText5 = () => texts5[Math.floor(Math.random() * texts5.length)];

const texts6 = [
  "While browsing online, you come across a website offering unbelievable deals on brand-name products.",
  "You receive a text message claiming you've won a free vacation to an exotic destination, but you need to provide your credit card information for booking fees.",
  "You receive an email stating that you've won a substantial cash prize in a contest you never entered, but you need to pay a processing fee to claim the prize.",
];
const getRandomText6 = () => texts6[Math.floor(Math.random() * texts6.length)];

const texts7 = [
  "You come across an online advertisement promising a substantial cash prize for participating in a survey.",
  "You receive an email claiming you've won a new smartphone in a contest you never entered, but you need to click on a link to claim your prize.",
  "You receive a phone call from someone claiming to be from your bank, asking for your account details to verify some transactions.",
];
const getRandomText7= () => texts7[Math.floor(Math.random() * texts7.length)];

const texts8 = [
  "You're researching a historical event online and have found two websites with conflicting information and want to determine which one is more reliable.",
  "You're considering purchasing a product online from a website you've never used before. However, you're unsure about its reliability.",
  "You receive an email offering a significant discount on a product from an unknown online retailer.",
];
const getRandomText8 = () => texts8[Math.floor(Math.random() * texts8.length)];

const texts9 = [
  "You're downloading a large software update for your computer and it's taking longer than expected and you're worried about your internet connection.",
  "You're streaming a video on your computer, but it keeps buffering frequently, causing interruptions.",
  "You're experiencing slow loading times while browsing various websites on your computer.",
];
const getRandomText9 = () => texts9[Math.floor(Math.random() * texts9.length)];

const texts10 = [
  "You're reading a news article about a recent data breach affecting a popular social media platform and want to assess your personal risk.",
  "You receive an email claiming to be from your bank, informing you of a security breach and asking you to update your account information.",
  "You receive a message on social media from an unfamiliar account, urging you to click on a link to claim a prize.",
];
const getRandomText10 = () => texts10[Math.floor(Math.random() * texts10.length)];

const questions = [
    { id: 1,  
      text: getRandomText1(),
      choices: ["Click on the link and provide the requested information promptly to secure your account.", "Ignore the email as it may be a phishing attempt and contact your bank directly using their official contact information.", "Forward the email to all your contacts to warn them about potential security threats."],
      correctChoice: 1 },
    { id: 2, 
      text: getRandomText2(),
      choices: ["Immediately click on the link to download the antivirus software and protect your computer.", "Close the pop-up window and run a reputable antivirus scan on your computer.", "Share the pop-up message with friends and family to alert them about potential security risks."],                                   
      correctChoice: 1 },
    { id: 3, 
      text: getRandomText3(),
        choices: ["Reply to the email with your personal information to claim the prize.", "Report the email as spam and delete it immediately.", "Forward the email to all your contacts to share the good news."],           
      correctChoice: 1 },
    { id: 4, 
      text: getRandomText4(),
      choices: ["Proceed with downloading the software since it's free.", "Exit the website immediately to avoid potential risks.", "Share the website link with friends to help them access free software."],                       
      correctChoice: 1 },
    { id: 5, 
      text: getRandomText5(),
      choices: ["Provide your password to help your friend access the document.", "Ignore the message and report it as suspicious to the social media platform.", "Share your password with your friend privately to ensure security."], 
      correctChoice: 1 },
    { id: 6, 
      text: getRandomText6(),
      choices: ["Immediately make a purchase to take advantage of the amazing deals.", "Investigate the website further to verify its legitimacy before making any purchases.", "Share the website link with friends and family to help them benefit from the deals.Share the website link with friends and family to help them benefit from the deals."],                                    
      correctChoice: 1 },
    { id: 7, 
      text: getRandomText7(),
      choices: ["Immediately click on the advertisement to participate in the survey and claim the prize.", "Investigate the legitimacy of the advertisement further before providing any personal information.", "Share the advertisement with friends and family to let them know about the opportunity."],                                   
      correctChoice: 1 },
    { id: 8, 
      text: getRandomText8(),
      choices: ["Check the website's design and aesthetics. A visually appealing website must be reliable.", "Look for the website's 'About Us' page to assess its credentials and potential biases.", "Search for reviews or mentions of the website from other reputable sources"],           
      correctChoice: 1 },
    { id: 9, 
      text: getRandomText9(),
      choices: ["Click the 'refresh' button repeatedly on the download page.", "Contact your internet service provider's customer support directly.", "Run a speed test on a popular online speed testing website."],                       
      correctChoice: 2 },
    { id: 10, 
      text: getRandomText10(),
      choices: ["Change your password on the affected platform immediately.", "Share the news article on your social media feed to warn others.", "Check if your email address or other information appears in lists of compromised data."], 
      correctChoice: 2 },
  ];
  
  export default questions;
  