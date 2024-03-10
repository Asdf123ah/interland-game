const texts1 = [
  "Your computer is running slowly.",
  "Your computer's speed has noticeably decreased.",
  "You notice that your computer is taking longer than usual to complete tasks.",
];
const getRandomText1 = () => texts1[Math.floor(Math.random() * texts1.length)];

const texts2 = [
  "In a crowded area with many nearby networks, you are experiencing frequent Wi-Fi disconnections on your mobile device.",
  "You're in an area with numerous Wi-Fi networks nearby, and your mobile device keeps experiencing frequent disconnections.",
  "You're experiencing frequent Wi-Fi disconnections on your mobile device while in a crowded area with many nearby networks.",
];
const getRandomText2 = () => texts2[Math.floor(Math.random() * texts2.length)];

const texts3 = [
  "Your computer's web browser is displaying websites incorrectly.",
  "You're experiencing issues with your computer's web browser.",
  "Your computer's web browser is displaying websites incorrectly, with some elements missing or misaligned.",
];
const getRandomText3 = () => texts3[Math.floor(Math.random() * texts3.length)];

const texts4 = [
  "Your computer's desktop icons and taskbar have disappeared suddenly.",
  "You encounter a situation where your computer's desktop icons and taskbar vanish unexpectedly.You encounter a situation where your computer's desktop icons and taskbar vanish unexpectedly.",
  "You notice that your computer's desktop icons and taskbar have suddenly disappeared.",
];
const getRandomText4 = () => texts4[Math.floor(Math.random() * texts4.length)];

const texts5 = [
  "You're experiencing poor Wi-Fi connectivity on your mobile device.",
  "You notice that your mobile device is struggling to maintain a stable Wi-Fi connection.",
  "You observe that your mobile device is having difficulty maintaining a stable Wi-Fi connection.",
];
const getRandomText5 = () => texts5[Math.floor(Math.random() * texts5.length)];

const texts6 = [
  "You've accidentally deleted an important text message on your mobile device.",
  "You accidentally deleted an essential email from your inbox on your computer.",
  "You mistakenly deleted an important document from your computer.",
];
const getRandomText6 = () => texts6[Math.floor(Math.random() * texts6.length)];

const texts7 = [
  "The apps in your mobile device take longer to open and respond.",
  "Your mobile device is running slow, and apps take longer than usual to open and respond.",
  "You find that your mobile device's performance has significantly decreased, with apps taking longer to open and respond.",
];
const getRandomText7= () => texts7[Math.floor(Math.random() * texts7.length)];

const texts8 = [
  "Your mobile device's battery drains quickly.",
  "You notice that your mobile device's battery drains quickly, even with minimal usage.",
  "You observe that your mobile device's battery is depleting rapidly, despite minimal usage.",
];
const getRandomText8 = () => texts8[Math.floor(Math.random() * texts8.length)];

const texts9 = [
  "You're experiencing frequent app crashes on your mobile device.",
  "You encounter frequent app crashes on your mobile device while using a specific application.",
  "You encounter frequent app crashes on your mobile device while using a specific application.",
];
const getRandomText9 = () => texts9[Math.floor(Math.random() * texts9.length)];

const texts10 = [
  "You accidentally deleted a file from your computer's desktop.",
  "You've mistakenly deleted a file from your computer's desktop.",
  "You mistakenly deleted an important document from your computer's folder.",
];
const getRandomText10 = () => texts10[Math.floor(Math.random() * texts10.length)];

const questions = [
    { id: 1,  
      text: getRandomText1(),
      choices: ["Closing all applications.", " Increase the computer storage", "Closing unnecessary applications"],
      correctChoice: 2 },
    { id: 2, 
      text: getRandomText2(),
      choices: ["Switching to a less congested Wi-Fi channel", "Upgrading your router's firmware", " Disabling Wi-Fi and using mobile data instead"],                                   
      correctChoice: 0 },
    { id: 3, 
      text: getRandomText3(),
        choices: ["Clearing the browser cache and cookies", "Increase the screen resolution", "Disabling JavaScript in the browser settings"],           
      correctChoice: 0 },
    { id: 4, 
      text: getRandomText4(),
      choices: ["Restart your computer", "Press the Windows key + D on your keyboard", "Right-click on the desktop and select 'Show desktop icons'."],                       
      correctChoice: 2 },
    { id: 5, 
      text: getRandomText5(),
      choices: ["Moving closer to the Wi-Fi router", " Enabling airplane mode", "Restarting the Wi-Fi router"], 
      correctChoice: 0 },
    { id: 6, 
      text: getRandomText6(),
      choices: ["Checking the 'Trash' or 'Deleted Items' folder", "Restarting your mobile device", "Clearing the cache of your messaging app"],                                    
      correctChoice: 0 },
    { id: 7, 
      text: getRandomText7(),
      choices: ["Clearing the cache of individual apps", " Uninstalling unused apps", "Increasing the screen brightness"],                                   
      correctChoice: 1 },
    { id: 8, 
      text: getRandomText8(),
      choices: ["Disabling location services for apps that don't require them", "Increasing the screen timeout duration", " Keeping the device in a warm environment"],           
      correctChoice: 0 },
    { id: 9, 
      text: getRandomText9(),
      choices: ["Clearing the cache of the problematic app", "Updating the operating system", "Increasing the screen brightness"],                       
      correctChoice: 0 },
    { id: 10, 
      text: getRandomText10(),
      choices: ["Empty the Recycle Bin", "Use file recovery software", "Creating a new file with the same name"], 
      correctChoice: 1 },
  ];
  
  export default questions;
  
  