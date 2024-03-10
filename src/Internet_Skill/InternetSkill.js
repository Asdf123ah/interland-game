import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../GameLiteracySkill.css';
import sycuresLogo from '../Photos/SycuresLogo.png';
import JumpingRobot from '../Photos/robot.png'
import BackModal from '../Modal/BackModal';
import questions from './InternetSkillQuestion';

const InternetSkill = () => {
  const { userId } = useParams();
  const navigate = useNavigate(); 
  const category = 'Internet Skill';
  const [showBackModal, setShowBackModal] = useState(false);
  const [question1Time, setQuestion1Time] = useState(0); const [question2Time, setQuestion2Time] = useState(0); const [question3Time, setQuestion3Time] = useState(0); const [question4Time, setQuestion4Time] = useState(0); const [question5Time, setQuestion5Time] = useState(0); const [question6Time, setQuestion6Time] = useState(0); const [question7Time, setQuestion7Time] = useState(0); const [question8Time, setQuestion8Time] = useState(0); const [question9Time, setQuestion9Time] = useState(0); const [question10Time, setQuestion10Time] = useState(0);

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

  let currentIndex = 0;
  const getNextQuestion = () => {
    const remainingQuestions = questions.filter(
      (question) => !displayedQuestions.some((displayedQuestion) => displayedQuestion.text === question.text)
    );
    if (remainingQuestions.length === 0) {
      navigate(`/result/${userId}/`, { state: {question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, isCorrectQuestions, adjustedScore, time, totalQuestions, category, question1Time, question2Time, question3Time, question4Time, question5Time, question6Time, question7Time, question8Time, question9Time, question10Time}});
      return;
    }
    const selectedQuestion = remainingQuestions[currentIndex];
    currentIndex++;
  
    return selectedQuestion;
  };
  

  const [score, setScore] = useState(0);
  const [robotPosition, setRobotPosition] = useState({ left: 43, top: 1, moved: false });
  const [showPopup, setShowPopup] = useState(true);
  const [hexagonVisibility, setHexagonVisibility] = useState({hexagon1: false, hexagon2: false, hexagon3: false});
  const [time, setTime] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const [nextQuestion, setNextQuestion] = useState({ text: '', choices: [] });
  const [displayedQuestions, setDisplayedQuestions] = useState([]); 
  
  useEffect(() => {
    if (hasClicked) {
      const remainingQuestions = questions.filter(
        (question) => !displayedQuestions.some((displayedQuestion) => displayedQuestion.text === question.text)
      );
      if (remainingQuestions.length === 0) {
        navigate(`/result/${userId}/`, { state: {question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, isCorrectQuestions, adjustedScore, time, totalQuestions, category, question1Time, question2Time, question3Time, question4Time, question5Time, question6Time, question7Time, question8Time, question9Time, question10Time}});
      } else {
        setNextQuestion(getNextQuestion());
      }
    }
  }, [score, hasClicked, displayedQuestions]);

  useEffect(() => {
    let timer;
    if (hasClicked) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [hasClicked]);
  
  useEffect(() => {
    if (hasClicked && score === 1 && !question1Time) {
      const timeDifference1 = time;
      setQuestion1Time(timeDifference1);
    }
    if (hasClicked && score === 2 && !question2Time) {
      const timeDifference1 = time; const timeDifference2 = timeDifference1 - question1Time;
      setQuestion2Time(timeDifference2);
    }
    if (hasClicked && score === 3 && !question3Time) {
      const timeDifference1 = time; const timeDifference2 = timeDifference1 - question1Time; const timeDifference3 = timeDifference2 - question2Time;
      setQuestion3Time(timeDifference3);
    }
    if (hasClicked && score === 4 && !question4Time) {
      const timeDifference1 = time; const timeDifference2 = timeDifference1 - question1Time; const timeDifference3 = timeDifference2 - question2Time; const timeDifference4 = timeDifference3 - question3Time;
      setQuestion4Time(timeDifference4);
    }
    if (hasClicked && score === 5 && !question5Time) {
      const timeDifference1 = time; const timeDifference2 = timeDifference1 - question1Time; const timeDifference3 = timeDifference2 - question2Time; const timeDifference4 = timeDifference3 - question3Time; const timeDifference5 = timeDifference4 - question4Time;
      setQuestion5Time(timeDifference5);
    }
    if (hasClicked && score === 6 && !question6Time) {
      const timeDifference1 = time; const timeDifference2 = timeDifference1 - question1Time; const timeDifference3 = timeDifference2 - question2Time; const timeDifference4 = timeDifference3 - question3Time; const timeDifference5 = timeDifference4 - question4Time; const timeDifference6 = timeDifference5 - question5Time;
      setQuestion6Time(timeDifference6);
    }
    if (hasClicked && score === 7 && !question7Time) {
      const timeDifference1 = time; const timeDifference2 = timeDifference1 - question1Time; const timeDifference3 = timeDifference2 - question2Time; const timeDifference4 = timeDifference3 - question3Time; const timeDifference5 = timeDifference4 - question4Time; const timeDifference6 = timeDifference5 - question5Time; const timeDifference7 = timeDifference6 - question6Time;
      setQuestion7Time(timeDifference7);
    }
    if (hasClicked && score === 8 && !question8Time) {
      const timeDifference1 = time; const timeDifference2 = timeDifference1 - question1Time; const timeDifference3 = timeDifference2 - question2Time; const timeDifference4 = timeDifference3 - question3Time; const timeDifference5 = timeDifference4 - question4Time; const timeDifference6 = timeDifference5 - question5Time; const timeDifference7 = timeDifference6 - question6Time; const timeDifference8 = timeDifference7 - question7Time;
      setQuestion8Time(timeDifference8);
    }
    if (hasClicked && score === 9 && !question9Time) {
      const timeDifference1 = time; const timeDifference2 = timeDifference1 - question1Time; const timeDifference3 = timeDifference2 - question2Time; const timeDifference4 = timeDifference3 - question3Time; const timeDifference5 = timeDifference4 - question4Time; const timeDifference6 = timeDifference5 - question5Time; const timeDifference7 = timeDifference6 - question6Time; const timeDifference8 = timeDifference7 - question7Time; const timeDifference9 = timeDifference8 - question8Time;
      setQuestion9Time(timeDifference9);
    }

    if (!hasClicked && score === 10 && !question10Time) {
      const timeDifference10 = (time-(question1Time+question2Time+question3Time+question4Time+question5Time+question6Time+question7Time+question8Time+question9Time));
      setQuestion10Time(timeDifference10);
    }
  }, [score, hasClicked, time, question1Time, question2Time, question3Time, question4Time, question5Time, question6Time, question7Time, question8Time, question9Time, question10Time,]);

  const handlePopupClick = () => {
    setHasClicked(true);
    setShowPopup(false);
    setHexagonVisibility({
      hexagon1: true, hexagon2: true, hexagon3: true,
    });
  };

  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [wrongAnswer, setWrongAnswer] = useState(null); 
  const [hideHexagon1Text,  setHideHexagon1Text ] = useState(false); const [hideHexagon2Text,  setHideHexagon2Text ] = useState(false); const [hideHexagon3Text,  setHideHexagon3Text ] = useState(false); const [hideHexagon4Text,  setHideHexagon4Text ] = useState(false); const [hideHexagon5Text,  setHideHexagon5Text ] = useState(false); const [hideHexagon6Text,  setHideHexagon6Text ] = useState(false); const [hideHexagon7Text,  setHideHexagon7Text ] = useState(false); const [hideHexagon8Text,  setHideHexagon8Text ] = useState(false); const [hideHexagon9Text,  setHideHexagon9Text ] = useState(false); const [hideHexagon10Text, setHideHexagon10Text] = useState(false);
  const [hideHexagon11Text, setHideHexagon11Text] = useState(false); const [hideHexagon12Text, setHideHexagon12Text] = useState(false); const [hideHexagon13Text, setHideHexagon13Text] = useState(false); const [hideHexagon14Text, setHideHexagon14Text] = useState(false); const [hideHexagon15Text, setHideHexagon15Text] = useState(false); const [hideHexagon16Text, setHideHexagon16Text] = useState(false); const [hideHexagon17Text, setHideHexagon17Text] = useState(false); const [hideHexagon18Text, setHideHexagon18Text] = useState(false); const [hideHexagon19Text, setHideHexagon19Text] = useState(false); const [hideHexagon20Text, setHideHexagon20Text] = useState(false); 
  const [hideHexagon21Text, setHideHexagon21Text] = useState(false); const [hideHexagon22Text, setHideHexagon22Text] = useState(false); const [hideHexagon23Text, setHideHexagon23Text] = useState(false); const [hideHexagon24Text, setHideHexagon24Text] = useState(false); const [hideHexagon25Text, setHideHexagon25Text] = useState(false); const [hideHexagon26Text, setHideHexagon26Text] = useState(false); const [hideHexagon27Text, setHideHexagon27Text] = useState(false); const [hideHexagon28Text, setHideHexagon28Text] = useState(false); const [hideHexagon29Text, setHideHexagon29Text] = useState(false); const [hideHexagon30Text, setHideHexagon30Text] = useState(false);
  const [hideHexagon31Text, setHideHexagon31Text] = useState(false); const [hideHexagon32Text, setHideHexagon32Text] = useState(false); const [hideHexagon33Text, setHideHexagon33Text] = useState(false); const [hideHexagon34Text, setHideHexagon34Text] = useState(false); const [hideHexagon35Text, setHideHexagon35Text] = useState(false); const [hideHexagon36Text, setHideHexagon36Text] = useState(false); const [hideHexagon37Text, setHideHexagon37Text] = useState(false); const [hideHexagon38Text, setHideHexagon38Text] = useState(false); const [hideHexagon39Text, setHideHexagon39Text] = useState(false); const [hideHexagon40Text, setHideHexagon40Text] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const totalQuestions = questions.length;
  const adjustedScore = score;
  const [isCorrectQuestions, setIsCorrectQuestions] = useState({ question1: false, question2: false, question3: false, question4: false, question5: false, question6: false, question7: false, question8: false, question9: false, question10: false,});
  const question1 = isCorrectQuestions[0]; const question2 = isCorrectQuestions[1]; const question3 = isCorrectQuestions[2]; const question4 = isCorrectQuestions[3]; const question5 = isCorrectQuestions[4]; const question6 = isCorrectQuestions[5]; const question7 = isCorrectQuestions[6]; const question8 = isCorrectQuestions[7]; const question9 = isCorrectQuestions[8]; const question10 = isCorrectQuestions[9];

  const [clickedSets, setClickedSets] = useState({
    set2: false, set3: false, set4: false, set5: false, set6: false, set7: false, set8: false, set9: false, set10: false,
  });
  const handleHexagonClick = async (hexagonNumber, choiceIndex) => {
    let setKey;
    if (hexagonNumber >= 4 && hexagonNumber <= 6) {
      setKey = 'set2';
    } else if (hexagonNumber >= 7 && hexagonNumber <= 9) {
      setKey = 'set3';
    } else if (hexagonNumber >= 10 && hexagonNumber <= 12) {
      setKey = 'set4';
    } else if (hexagonNumber >= 13 && hexagonNumber <= 15) {
      setKey = 'set5';
    } else if (hexagonNumber >= 16 && hexagonNumber <= 18) {
      setKey = 'set6';
    } else if (hexagonNumber >= 19 && hexagonNumber <= 21) {
      setKey = 'set7';
    } else if (hexagonNumber >= 22 && hexagonNumber <= 24) {
      setKey = 'set8';
    } else if (hexagonNumber >= 25 && hexagonNumber <= 27) {
      setKey = 'set9';
    } else if (hexagonNumber >= 28 && hexagonNumber <= 30) {
      setKey = 'set10';
    }

    if (!nextQuestion || !nextQuestion.choices) {
      console.error('Invalid nextQuestion:', nextQuestion);
      return;
    }
    if (!robotPosition.moved) {
      if (
        (hexagonNumber === 1  && robotPosition.left === 7  && robotPosition.top === 10  ) || (hexagonNumber === 2  && robotPosition.left === 43 && robotPosition.top === 23.6) || (hexagonNumber === 3  && robotPosition.left === 78 && robotPosition.top === 10  ) || (hexagonNumber === 4  && robotPosition.left === 7  && robotPosition.top === 27.5) || (hexagonNumber === 5  && robotPosition.left === 43 && robotPosition.top === 38  ) || (hexagonNumber === 6  && robotPosition.left === 78 && robotPosition.top === 27.5) || (hexagonNumber === 7  && robotPosition.left === 7  && robotPosition.top === 39) || (hexagonNumber === 8  && robotPosition.left === 43 && robotPosition.top === 47.2) || (hexagonNumber === 9  && robotPosition.left === 78 && robotPosition.top === 39  ) || (hexagonNumber === 10 && robotPosition.left === 7  && robotPosition.top === 47  ) || 
        (hexagonNumber === 11 && robotPosition.left === 43 && robotPosition.top === 53.6) || (hexagonNumber === 12 && robotPosition.left === 78 && robotPosition.top === 47  ) || (hexagonNumber === 13 && robotPosition.left === 7  && robotPosition.top === 52.7) || (hexagonNumber === 14 && robotPosition.left === 43 && robotPosition.top === 58.3) || (hexagonNumber === 15 && robotPosition.left === 78 && robotPosition.top === 52.7) || (hexagonNumber === 16 && robotPosition.left === 7  && robotPosition.top === 57.2) || (hexagonNumber === 17 && robotPosition.left === 43 && robotPosition.top === 62) || (hexagonNumber === 18 && robotPosition.left === 78 && robotPosition.top === 57.2) || (hexagonNumber === 19 && robotPosition.left === 7  && robotPosition.top === 60.7) || (hexagonNumber === 20 && robotPosition.left === 43 && robotPosition.top === 65  ) || 
        (hexagonNumber === 21 && robotPosition.left === 78 && robotPosition.top === 60.7) || (hexagonNumber === 22 && robotPosition.left === 7  && robotPosition.top === 63.5) || (hexagonNumber === 23 && robotPosition.left === 43 && robotPosition.top === 67.2) || (hexagonNumber === 24 && robotPosition.left === 78 && robotPosition.top === 63.5) || (hexagonNumber === 25 && robotPosition.left === 7  && robotPosition.top === 66  ) || (hexagonNumber === 26 && robotPosition.left === 43 && robotPosition.top === 69.2) || (hexagonNumber === 27 && robotPosition.left === 78 && robotPosition.top === 66) || (hexagonNumber === 28 && robotPosition.left === 7  && robotPosition.top === 68  ) || (hexagonNumber === 29 && robotPosition.left === 43 && robotPosition.top === 70.7) || (hexagonNumber === 30 && robotPosition.left === 78 && robotPosition.top === 68.5) ||
        (hexagonNumber === 31 && robotPosition.left === 43 && robotPosition.top === 23.6) || (hexagonNumber === 32 && robotPosition.left === 43 && robotPosition.top === 38  ) || (hexagonNumber === 33 && robotPosition.left === 43 && robotPosition.top === 47.2) || (hexagonNumber === 34 && robotPosition.left === 43 && robotPosition.top === 53.6) || (hexagonNumber === 35 && robotPosition.left === 43 && robotPosition.top === 58.3) || (hexagonNumber === 36 && robotPosition.left === 43 && robotPosition.top === 62  ) || (hexagonNumber === 37 && robotPosition.left === 43 && robotPosition.top === 65) || (hexagonNumber === 38 && robotPosition.left === 43 && robotPosition.top === 67.2) || (hexagonNumber === 39 && robotPosition.left === 43 && robotPosition.top === 69.2) || (hexagonNumber === 40 && robotPosition.left === 43 && robotPosition.top === 70.7)
      ){
      return;
    }
    const isCorrect = choiceIndex === nextQuestion.correctChoice;
    if (isCorrect) {
      setCorrectAnswer(hexagonNumber);
      setScore((prevScore) => prevScore + 1);
      if (setKey && !clickedSets[setKey]) {
        setClickedSets({ ...clickedSets, [setKey]: true });
        const container = document.querySelector('.containerGame');
        if (container) {
          container.style.height = `${container.offsetHeight + 280}px`; 
          setTimeout(() => {
            window.scrollTo({
              left: 0,
              top: container.scrollHeight,
              behavior: 'smooth'
            });
          }, 0);
        }
      }
      
      if (nextQuestion.text === questions[0].text) {
        if (question1Time) {
          const timeDifference1 = time - question1Time;
          console.log('Time for question 1:', timeDifference1);
        }
      }
      if (nextQuestion.text === questions[1].text) {
        if (question2Time) {
          const timeDifference1 = time - question1Time; const timeDifference2 = timeDifference1 - question2Time;
          console.log('Time for question 2:', timeDifference2);
        }
      }
      if (nextQuestion.text === questions[2].text) {
        if (question3Time) {
          const timeDifference1 = time - question1Time; const timeDifference2 = timeDifference1 - question2Time; const timeDifference3 = timeDifference2 - question3Time;
          console.log('Time for question 3:', timeDifference3);
        }
      }
      if (nextQuestion.text === questions[3].text) {
        if (question4Time) {
          const timeDifference1 = time - question1Time; const timeDifference2 = timeDifference1 - question2Time; const timeDifference3 = timeDifference2 - question3Time; const timeDifference4 = timeDifference3 - question4Time;
          console.log('Time for question 4:', timeDifference4);
        }
      }
      if (nextQuestion.text === questions[4].text) {
        if (question5Time) {
          const timeDifference1 = time - question1Time; const timeDifference2 = timeDifference1 - question2Time; const timeDifference3 = timeDifference2 - question3Time; const timeDifference4 = timeDifference3 - question4Time; const timeDifference5 = timeDifference4 - question5Time;
          console.log('Time for question 5:', timeDifference5);
        }
      }
      if (nextQuestion.text === questions[5].text) {
        if (question6Time) {
          const timeDifference1 = time - question1Time; const timeDifference2 = timeDifference1 - question2Time; const timeDifference3 = timeDifference2 - question3Time; const timeDifference4 = timeDifference3 - question4Time; const timeDifference5 = timeDifference4 - question5Time; const timeDifference6 = timeDifference5 - question6Time;
          console.log('Time for question 6:', timeDifference6);
        }
      }
      if (nextQuestion.text === questions[6].text) {
        if (question7Time) {
          const timeDifference1 = time - question1Time; const timeDifference2 = timeDifference1 - question2Time; const timeDifference3 = timeDifference2 - question3Time; const timeDifference4 = timeDifference3 - question4Time; const timeDifference5 = timeDifference4 - question5Time; const timeDifference6 = timeDifference5 - question6Time; const timeDifference7 = timeDifference6 - question7Time;
          console.log('Time for question 7:', timeDifference7);
        }
      }
      if (nextQuestion.text === questions[7].text) {
        if (question8Time) {
          const timeDifference1 = time - question1Time; const timeDifference2 = timeDifference1 - question2Time; const timeDifference3 = timeDifference2 - question3Time; const timeDifference4 = timeDifference3 - question4Time; const timeDifference5 = timeDifference4 - question5Time; const timeDifference6 = timeDifference5 - question6Time; const timeDifference7 = timeDifference6 - question7Time; const timeDifference8 = timeDifference7 - question8Time;
          console.log('Time for question 8:', timeDifference8);
        }
      }
      if (nextQuestion.text === questions[8].text) {
        if (question9Time) {
          const timeDifference1 = time - question1Time; const timeDifference2 = timeDifference1 - question2Time; const timeDifference3 = timeDifference2 - question3Time; const timeDifference4 = timeDifference3 - question4Time; const timeDifference5 = timeDifference4 - question5Time; const timeDifference6 = timeDifference5 - question6Time; const timeDifference7 = timeDifference6 - question7Time; const timeDifference8 = timeDifference7 - question8Time; const timeDifference9 = timeDifference8 - question9Time;
          console.log('Time for question 9:', timeDifference9);
        }
      }
      if (nextQuestion.text === questions[9].text) {
        if (question10Time) {
          const timeDifference10 = (time-(question1Time+question2Time+question3Time+question4Time+question5Time+question6Time+question7Time+question8Time+question9Time));
          console.log('Time for question 10:', timeDifference10);
        }
      }

      if (isCorrect) {
        setIsCorrectQuestions(prevIncorrectAnswers => ({
          ...prevIncorrectAnswers,
          [`question${displayedQuestions.length + 1}`]: true,
        }));
      }
    } else {
      setWrongAnswer(hexagonNumber);
      if (setKey && !clickedSets[setKey]) {
        setClickedSets({ ...clickedSets, [setKey]: true });
        const container = document.querySelector('.containerGame');
        if (container) {
          container.style.height = `${container.offsetHeight + 280}px`; 
          setTimeout(() => {
            window.scrollTo({
              left: 0,
              top: container.scrollHeight,
              behavior: 'smooth'
            });
          }, 0);
        }
      }
    }

    setDisplayedQuestions((prevQuestions) => [...prevQuestions, nextQuestion]);
    switch (hexagonNumber) {
      case 1:
        setHideHexagon1Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: true, hexagon2: true, hexagon3: false, hexagon4: true, hexagon5: true, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false, hexagon31: false, hexagon32: false,
        }));
        break;
      case 2:
        setHideHexagon2Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: true, hexagon3: false, hexagon4: true, hexagon5: true, hexagon6: true, hexagon7: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
        }));
        break;
      case 3:
        setHideHexagon3Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: true, hexagon4: false, hexagon5: true, hexagon6: true, hexagon7: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false, hexagon31: true,
        }));
        break;
      case 4:
        setHideHexagon4Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: true, hexagon5: true, hexagon6: false, hexagon7: true, hexagon8: true, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false, hexagon31: false, hexagon32: false, hexagon33: false,
        }));
        break;
      case 5:
        setHideHexagon5Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: true, hexagon6: false, hexagon7: true, hexagon8: true, hexagon9: true, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false, hexagon31: false,
        }));
        break;
      case 6:
        setHideHexagon6Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: true, hexagon7: false, hexagon8: true, hexagon9: true, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false, hexagon31: false, hexagon32: true,
        }));
        break;
      case 7:
        setHideHexagon7Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: true, hexagon8: true, hexagon9: false, hexagon10: true, hexagon11: true, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false, hexagon32: false, hexagon33: false, hexagon34: false,
        }));
        break;
      case 8:
        setHideHexagon8Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: true, hexagon9: false, hexagon10: true, hexagon11: true, hexagon12: true, hexagon13: false, hexagon14: false, hexagon15: false, hexagon32: false, 
        }));
        break;
      case 9:
        setHideHexagon9Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: true, hexagon10: false, hexagon11: true, hexagon12: true, hexagon13: false, hexagon14: false, hexagon15: false, hexagon32: false, hexagon33: true,
        }));
        break;
      case 10:
        setHideHexagon10Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: true, hexagon11: true, hexagon12: false, hexagon13: true, hexagon14: true, hexagon15: false, hexagon33: false, hexagon34: false, hexagon35: false,
        }));
        break;
      case 11:
        setHideHexagon11Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: true, hexagon12: false, hexagon13: true, hexagon14: true, hexagon15: true, hexagon33: false, 
        }));
        break;
      case 12:
        setHideHexagon12Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: true, hexagon13: false, hexagon14: true, hexagon15: true, hexagon33: false, hexagon34: true,
        }));
        break;
      case 13:
        setHideHexagon13Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: true, hexagon14: true, hexagon15: false,
          hexagon16: true, hexagon17: true, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon34: false, hexagon35: false, hexagon36: false,
        }));
        break;
      case 14:
        setHideHexagon14Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: true, hexagon15: false,
          hexagon16: true, hexagon17: true, hexagon18: true, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon34: false, 
        }));
        break;
      case 15:
        setHideHexagon15Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: true,
          hexagon16: false, hexagon17: true, hexagon18: true, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon34: false, hexagon35: true,
        }));
        break;
      case 16:
        setHideHexagon16Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: true, hexagon17: true, hexagon18: false, hexagon19: true, hexagon20: true, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon35: false, hexagon36: false, hexagon37: false,
        }));
        break;
      case 17:
        setHideHexagon17Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: true, hexagon18: false, hexagon19: true, hexagon20: true, hexagon21: true, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon35: false, 
        }));
        break;
      case 18:
        setHideHexagon18Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: true, hexagon19: false, hexagon20: true, hexagon21: true, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon35: false, hexagon36: true,
        }));
        break;
      case 19:
        setHideHexagon19Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: true, hexagon20: true, hexagon21: false, hexagon22: true, hexagon23: true, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon36: false, hexagon37: false, hexagon38: false,
        }));
        break;
      case 20:
        setHideHexagon20Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: true, hexagon21: false, hexagon22: true, hexagon23: true, hexagon24: true, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon36: false, 
        }));
        break;
      case 21:
        setHideHexagon21Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: true, hexagon22: false, hexagon23: true, hexagon24: true, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon36: false, hexagon37: true,
        }));
        break;
      case 22:
        setHideHexagon22Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: true, hexagon23: true, hexagon24: false, hexagon25: true, hexagon26: true, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon37: false, hexagon38: false, hexagon39: false,
        }));
        break;
      case 23:
        setHideHexagon23Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: true, hexagon24: false, hexagon25: true, hexagon26: true, hexagon27: true, hexagon28: false, hexagon29: false, hexagon30: false, hexagon37: false, 
        }));
        break;
      case 24:
        setHideHexagon24Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: true, hexagon25: false, hexagon26: true, hexagon27: true, hexagon28: false, hexagon29: false, hexagon30: false, hexagon37: false, hexagon38: true,
        }));
        break;
      case 25:
        setHideHexagon25Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: true, hexagon26: true, hexagon27: false, hexagon28: true, hexagon29: true, hexagon30: false, hexagon38: false, hexagon39: false, hexagon40: false,
        }));
        break;
      case 26:
        setHideHexagon26Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: true, hexagon27: false, hexagon28: true, hexagon29: true, hexagon30: true, hexagon38: false, 
        }));
        break;
      case 27:
        setHideHexagon27Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: true, hexagon28: false, hexagon29: true, hexagon30: true, hexagon38: false, hexagon39: true,
        }));
        break;
      case 28:
        setHideHexagon28Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: true, hexagon29: false, hexagon30: false, hexagon39: false, hexagon40: false,
        }));
        break;
      case 29:
        setHideHexagon29Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: true, hexagon30: false, hexagon39: false, 
        }));
        break;
      case 30:
        setHideHexagon30Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: true, hexagon39: false, hexagon40: false,
        }));
        break;
      case 31:
        setHideHexagon31Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: true, hexagon5: true, hexagon6: true, hexagon7: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false, hexagon31: true, 
        }));
        break;
      case 32:
        setHideHexagon32Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: true, hexagon8: true, hexagon9: true, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false, hexagon32: true,
        }));
        break;
      case 33:
        setHideHexagon33Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: true, hexagon11: true, hexagon12: true, hexagon13: false, hexagon14: false, hexagon15: false, hexagon33: true
        }));
        break;
      case 34:
        setHideHexagon34Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: true, hexagon14: true, hexagon15: true, hexagon34: true,
        }));
        break;
      case 35:
        setHideHexagon35Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: true, hexagon17: true, hexagon18: true, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon35: true,
        }));
        break;
      case 36:
        setHideHexagon36Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: true, hexagon20: true, hexagon21: true, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon36: true,
        }));
        break;
      case 37:
        setHideHexagon37Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: true, hexagon23: true, hexagon24: true, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon37: true,
        }));
        break;
      case 38:
        setHideHexagon38Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: true, hexagon26: true, hexagon27: true, hexagon28: false, hexagon29: false, hexagon30: false, hexagon38: true,
        }));
        break;
      case 39:
        setHideHexagon39Text(true);
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: true, hexagon29: true, hexagon30: true, hexagon39: true,
        }));
        break;
      case 40:
        setHideHexagon40Text(true); 
        setHexagonVisibility((prevVisibility) => ({
          ...prevVisibility, hexagon1: false, hexagon2: false, hexagon3: false, hexagon4: false, hexagon5: false, hexagon6: false, hexagon7: false, hexagon8: false, hexagon9: false, hexagon10: false, hexagon11: false, hexagon12: false, hexagon13: false, hexagon14: false, hexagon15: false,
          hexagon16: false, hexagon17: false, hexagon18: false, hexagon19: false, hexagon20: false, hexagon21: false, hexagon22: false, hexagon23: false, hexagon24: false, hexagon25: false, hexagon26: false, hexagon27: false, hexagon28: false, hexagon29: false, hexagon30: false, hexagon40: true,
        }));
        break;
      default:
      break;
    }

    setRobotPosition({
      left: hexagonNumber === 1  ? 7    : hexagonNumber === 2  ? 43   : hexagonNumber === 3  ? 78   : hexagonNumber === 4  ? 7    : hexagonNumber === 5  ? 43   : hexagonNumber === 6  ? 78   : hexagonNumber === 7  ? 7  : hexagonNumber === 8  ? 43   : hexagonNumber === 9  ? 78   : hexagonNumber === 10 ? 7    : 
            hexagonNumber === 11 ? 43   : hexagonNumber === 12 ? 78   : hexagonNumber === 13 ? 7    : hexagonNumber === 14 ? 43   : hexagonNumber === 15 ? 78   : hexagonNumber === 16 ? 7    : hexagonNumber === 17 ? 43 : hexagonNumber === 18 ? 78   : hexagonNumber === 19 ? 7    : hexagonNumber === 20 ? 43   : 
            hexagonNumber === 21 ? 78   : hexagonNumber === 22 ? 7    : hexagonNumber === 23 ? 43   : hexagonNumber === 24 ? 78   : hexagonNumber === 25 ? 7    : hexagonNumber === 26 ? 43   : hexagonNumber === 27 ? 78 : hexagonNumber === 28 ? 7    : hexagonNumber === 29 ? 43   : hexagonNumber === 30 ? 78   : 
            hexagonNumber === 31 ? 43   : hexagonNumber === 32 ? 43   : hexagonNumber === 33 ? 43   : hexagonNumber === 34 ? 43   : hexagonNumber === 35 ? 43   : hexagonNumber === 36 ? 43   : hexagonNumber === 37 ? 43 : hexagonNumber === 38 ? 43   : hexagonNumber === 39 ? 43   : hexagonNumber === 40 ? 43   : 0,
      top:  hexagonNumber === 1  ? 10   : hexagonNumber === 2  ? 23.6 : hexagonNumber === 3  ? 10   : hexagonNumber === 4  ? 27.5 : hexagonNumber === 5  ? 38   : hexagonNumber === 6  ? 27.5 : hexagonNumber === 7  ? 39 : hexagonNumber === 8  ? 47.2 : hexagonNumber === 9  ? 39   : hexagonNumber === 10 ? 47   : 
            hexagonNumber === 11 ? 53.6 : hexagonNumber === 12 ? 47   : hexagonNumber === 13 ? 52.7 : hexagonNumber === 14 ? 58.3 : hexagonNumber === 15 ? 52.7 : hexagonNumber === 16 ? 57.2 : hexagonNumber === 17 ? 62 : hexagonNumber === 18 ? 57.2 : hexagonNumber === 19 ? 60.7 : hexagonNumber === 20 ? 65   : 
            hexagonNumber === 21 ? 60.7 : hexagonNumber === 22 ? 63.5 : hexagonNumber === 23 ? 67.2 : hexagonNumber === 24 ? 63.5 : hexagonNumber === 25 ? 66   : hexagonNumber === 26 ? 69.2 : hexagonNumber === 27 ? 66 : hexagonNumber === 28 ? 68   : hexagonNumber === 29 ? 70.7 : hexagonNumber === 30 ? 68.5 : 
            hexagonNumber === 31 ? 23.6 : hexagonNumber === 32 ? 38   : hexagonNumber === 33 ? 47.2 : hexagonNumber === 34 ? 53.6 : hexagonNumber === 35 ? 58.3 : hexagonNumber === 36 ? 62   : hexagonNumber === 37 ? 65 : hexagonNumber === 38 ? 67.2 : hexagonNumber === 39 ? 69.2 : hexagonNumber === 40 ? 70.7 : 0,
            moved: true,
    });

    setTimeout(() => {
      setRobotPosition((prevPosition) => ({ ...prevPosition, moved: false }));
    }, 100);
  }
  };


  return (
    <div className="containerGame">
      <button className="backButtonGame" onClick={handleBackButtonClick}></button>
      <img className="sycuresLogoGame" src={sycuresLogo} alt="Sycures Logo" />
      <div className="boxTop"></div>
      <div className="baseHexagon hexagon0"></div>
      <div className="boxBottom"></div>
      {showPopup && (
        <div className="popup" onClick={handlePopupClick}>
          <h1>Internet Skill</h1>
          <p>Internet skills involves understanding the fundamentals of the internet, establishing connections to it, utilizing its features, navigating various online platforms, interpreting the structure of web pages, and engaging in online communication.</p>
          <div className='footer-game'>Click here to continue.</div>
        </div>
      )}
      {hexagonVisibility.hexagon1 && (
        <div className={`leftHexagon hexagon1 ${correctAnswer === 1 ? 'bounceleft' : ''} ${wrongAnswer === 1 ? 'bounceleft' : ''}`} onClick={() => handleHexagonClick(1, 0)}>
          <div className={`hexagonText ${hideHexagon1Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]}</div>
        </div>
      )}
      {hexagonVisibility.hexagon2 && (
        <div className={`baseHexagon hexagon2 ${correctAnswer === 2 ? 'bouncebase' : ''} ${wrongAnswer === 2 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(2, 1)}>
          <div className={`hexagonText ${hideHexagon2Text ? 'hidden' : ''}`}>{nextQuestion.choices[1]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon3 && (
        <div className={`rightHexagon hexagon3 ${correctAnswer === 3 ? 'bounceright' : ''} ${wrongAnswer === 3 ? 'bounceright' : ''}`} onClick={() => handleHexagonClick(3, 2)}>
          <div className={`hexagonText ${hideHexagon3Text ? 'hidden' : ''}`}>{nextQuestion.choices[2]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon4 && (
        <div className={`leftHexagon hexagon4 ${correctAnswer === 4 ? 'bounceleft' : ''} ${wrongAnswer === 4 ? 'bounceleft' : ''}`} onClick={() => handleHexagonClick(4, 0)}>
          <div className={`hexagonText ${hideHexagon4Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon5 && (
        <div className={`baseHexagon hexagon5 ${correctAnswer === 5 ? 'bouncebase' : ''} ${wrongAnswer === 5 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(5, 2)}>
          <div className={`hexagonText ${hideHexagon5Text ? 'hidden' : ''}`}>{nextQuestion.choices[2]} </div>
        </div>
      )} 
      {hexagonVisibility.hexagon6 && (
        <div className={`rightHexagon hexagon6 ${correctAnswer === 6 ? 'bounceright' : ''} ${wrongAnswer === 6 ? 'bounceright' : ''}`} onClick={() => handleHexagonClick(6, 1)}>
          <div className={`hexagonText ${hideHexagon6Text ? 'hidden' : ''}`}>{nextQuestion.choices[1]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon7 && (
        <div className={`leftHexagon hexagon7 ${correctAnswer === 7 ? 'bounceleft' : ''} ${wrongAnswer === 7 ? 'bounceleft' : ''}`} onClick={() => handleHexagonClick(7, 0)}>
          <div className={`hexagonText ${hideHexagon7Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon8 && (
        <div className={`baseHexagon hexagon8 ${correctAnswer === 8 ? 'bouncebase' : ''} ${wrongAnswer === 8 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(8, 1)}>
          <div className={`hexagonText ${hideHexagon8Text ? 'hidden' : ''}`}>{nextQuestion.choices[1]} </div>
        </div>
      )} 
      {hexagonVisibility.hexagon9 && (
        <div className={`rightHexagon hexagon9 ${correctAnswer === 9 ? 'bounceright' : ''} ${wrongAnswer === 9 ? 'bounceright' : ''}`} onClick={() => handleHexagonClick(9, 2)}>
          <div className={`hexagonText ${hideHexagon9Text ? 'hidden' : ''}`}>{nextQuestion.choices[2]} </div>
        </div>
      )}  
      {hexagonVisibility.hexagon10 && (
        <div className={`leftHexagon hexagon10 ${correctAnswer === 10 ? 'bounceleft' : ''} ${wrongAnswer === 10 ? 'bounceleft' : ''}`} onClick={() => handleHexagonClick(10, 0)}>
          <div className={`hexagonText ${hideHexagon10Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon11 && (
        <div className={`baseHexagon hexagon11 ${correctAnswer === 11 ? 'bouncebase' : ''} ${wrongAnswer === 11 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(11, 2)}>
          <div className={`hexagonText ${hideHexagon11Text ? 'hidden' : ''}`}>{nextQuestion.choices[2]} </div>
        </div>
      )} 
      {hexagonVisibility.hexagon12 && (
        <div className={`rightHexagon hexagon12 ${correctAnswer === 12 ? 'bounceright' : ''} ${wrongAnswer === 12 ? 'bounceright' : ''}`} onClick={() => handleHexagonClick(12, 1)}>
          <div className={`hexagonText ${hideHexagon12Text ? 'hidden' : ''}`}>{nextQuestion.choices[1]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon13 && (
        <div className={`leftHexagon hexagon13 ${correctAnswer === 13 ? 'bounceleft' : ''} ${wrongAnswer === 13 ? 'bounceleft' : ''}`} onClick={() => handleHexagonClick(13, 0)}>
          <div className={`hexagonText ${hideHexagon13Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon14 && (
        <div className={`baseHexagon hexagon14 ${correctAnswer === 14 ? 'bouncebase' : ''} ${wrongAnswer === 14 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(14, 1)}>
          <div className={`hexagonText ${hideHexagon14Text ? 'hidden' : ''}`}>{nextQuestion.choices[1]} </div>
        </div>
      )} 
      {hexagonVisibility.hexagon15 && (
        <div className={`rightHexagon hexagon15 ${correctAnswer === 15 ? 'bounceright' : ''} ${wrongAnswer === 15 ? 'bounceright' : ''}`} onClick={() => handleHexagonClick(15, 2)}>
          <div className={`hexagonText ${hideHexagon15Text ? 'hidden' : ''}`}>{nextQuestion.choices[2]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon16 && (
        <div className={`leftHexagon hexagon16 ${correctAnswer === 16 ? 'bounceleft' : ''} ${wrongAnswer === 16 ? 'bounceleft' : ''}`} onClick={() => handleHexagonClick(16, 0)}>
          <div className={`hexagonText ${hideHexagon16Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]}</div>
        </div>
      )}
      {hexagonVisibility.hexagon17 && (
        <div className={`baseHexagon hexagon17 ${correctAnswer === 17 ? 'bouncebase' : ''} ${wrongAnswer === 17 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(17, 2)}>
          <div className={`hexagonText ${hideHexagon17Text ? 'hidden' : ''}`}>{nextQuestion.choices[2]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon18 && (
        <div className={`rightHexagon hexagon18 ${correctAnswer === 18 ? 'bounceright' : ''} ${wrongAnswer === 18 ? 'bounceright' : ''}`} onClick={() => handleHexagonClick(18, 1)}>
          <div className={`hexagonText ${hideHexagon18Text ? 'hidden' : ''}`}>{nextQuestion.choices[1]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon19 && (
        <div className={`leftHexagon hexagon19 ${correctAnswer === 19 ? 'bounceleft' : ''} ${wrongAnswer === 19 ? 'bounceleft' : ''}`} onClick={() => handleHexagonClick(19, 0)}>
          <div className={`hexagonText ${hideHexagon19Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon20 && (
        <div className={`baseHexagon hexagon20 ${correctAnswer === 20 ? 'bouncebase' : ''} ${wrongAnswer === 20 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(20, 1)}>
          <div className={`hexagonText ${hideHexagon20Text ? 'hidden' : ''}`}>{nextQuestion.choices[1]} </div>
        </div>
      )} 
      {hexagonVisibility.hexagon21 && (
        <div className={`rightHexagon hexagon21 ${correctAnswer === 21 ? 'bounceright' : ''} ${wrongAnswer === 21 ? 'bounceright' : ''}`} onClick={() => handleHexagonClick(21, 2)}>
          <div className={`hexagonText ${hideHexagon21Text ? 'hidden' : ''}`}>{nextQuestion.choices[2]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon22 && (
        <div className={`leftHexagon hexagon22 ${correctAnswer === 22 ? 'bounceleft' : ''} ${wrongAnswer === 22 ? 'bounceleft' : ''}`} onClick={() => handleHexagonClick(22, 0)}>
          <div className={`hexagonText ${hideHexagon22Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon23 && (
        <div className={`baseHexagon hexagon23 ${correctAnswer === 23 ? 'bouncebase' : ''} ${wrongAnswer === 23 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(23, 2)}>
          <div className={`hexagonText ${hideHexagon23Text ? 'hidden' : ''}`}>{nextQuestion.choices[2]} </div>
        </div>
      )} 
      {hexagonVisibility.hexagon24 && (
        <div className={`rightHexagon hexagon24 ${correctAnswer === 24 ? 'bounceright' : ''} ${wrongAnswer === 24 ? 'bounceright' : ''}`} onClick={() => handleHexagonClick(24, 1)}>
          <div className={`hexagonText ${hideHexagon24Text ? 'hidden' : ''}`}>{nextQuestion.choices[1]} </div>
        </div>
      )}  
      {hexagonVisibility.hexagon25 && (
        <div className={`leftHexagon hexagon25 ${correctAnswer === 25 ? 'bounceleft' : ''} ${wrongAnswer === 25 ? 'bounceleft' : ''}`} onClick={() => handleHexagonClick(25, 0)}>
          <div className={`hexagonText ${hideHexagon25Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon26 && (
        <div className={`baseHexagon hexagon26 ${correctAnswer === 26 ? 'bouncebase' : ''} ${wrongAnswer ===26 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(26, 1)}>
          <div className={`hexagonText ${hideHexagon26Text ? 'hidden' : ''}`}>{nextQuestion.choices[1]} </div>
        </div>
      )} 
      {hexagonVisibility.hexagon27 && (
        <div className={`rightHexagon hexagon27 ${correctAnswer === 27 ? 'bounceright' : ''} ${wrongAnswer === 27 ? 'bounceright' : ''}`} onClick={() => handleHexagonClick(27, 2)}>
          <div className={`hexagonText ${hideHexagon27Text ? 'hidden' : ''}`}>{nextQuestion.choices[2]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon28 && (
        <div className={`leftHexagon hexagon28 ${correctAnswer === 28 ? 'bounceleft' : ''} ${wrongAnswer === 28 ? 'bounceleft' : ''}`} onClick={() => handleHexagonClick(28, 0)}>
          <div className={`hexagonText ${hideHexagon28Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon29 && (
        <div className={`baseHexagon hexagon29 ${correctAnswer === 29 ? 'bouncebase' : ''} ${wrongAnswer === 29 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(29, 2)}>
          <div className={`hexagonText ${hideHexagon29Text ? 'hidden' : ''}`}>{nextQuestion.choices[2]} </div>
        </div>
      )} 
      {hexagonVisibility.hexagon30 && (
        <div className={`rightHexagon hexagon30 ${correctAnswer === 30 ? 'bounceright' : ''} ${wrongAnswer === 30 ? 'bounceright' : ''}`} onClick={() => handleHexagonClick(30, 1)}>
          <div className={`hexagonText ${hideHexagon30Text ? 'hidden' : ''}`}>{nextQuestion.choices[1]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon31 && (
        <div className={`baseHexagon hexagon31 ${correctAnswer === 31 ? 'bouncebase' : ''} ${wrongAnswer === 31 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(31, 0)}>
          <div className={`hexagonText ${hideHexagon31Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon32 && (
        <div className={`baseHexagon hexagon32 ${correctAnswer === 32 ? 'bouncebase' : ''} ${wrongAnswer === 32 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(32, 0)}>
          <div className={`hexagonText ${hideHexagon32Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon33 && (
        <div className={`baseHexagon hexagon33 ${correctAnswer === 33 ? 'bouncebase' : ''} ${wrongAnswer === 33 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(33, 0)}>
          <div className={`hexagonText ${hideHexagon33Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon34 && (
        <div className={`baseHexagon hexagon34 ${correctAnswer === 34 ? 'bouncebase' : ''} ${wrongAnswer === 34 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(34, 0)}>
          <div className={`hexagonText ${hideHexagon34Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon35 && (
        <div className={`baseHexagon hexagon35 ${correctAnswer === 35 ? 'bouncebase' : ''} ${wrongAnswer === 35 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(35, 0)}>
          <div className={`hexagonText ${hideHexagon35Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon36 && (
        <div className={`baseHexagon hexagon36 ${correctAnswer === 36? 'bouncebase' : ''} ${wrongAnswer === 36 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(36, 0)}>
          <div className={`hexagonText ${hideHexagon36Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon37 && (
        <div className={`baseHexagon hexagon37 ${correctAnswer === 37 ? 'bouncebase' : ''} ${wrongAnswer === 37 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(37, 0)}>
          <div className={`hexagonText ${hideHexagon37Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon38 && (
        <div className={`baseHexagon hexagon38 ${correctAnswer === 38 ? 'bouncebase' : ''} ${wrongAnswer === 38 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(38, 0)}>
          <div className={`hexagonText ${hideHexagon38Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon39 && (
        <div className={`baseHexagon hexagon39 ${correctAnswer === 39 ? 'bouncebase' : ''} ${wrongAnswer === 39 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(39, 0)}>
          <div className={`hexagonText ${hideHexagon39Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      {hexagonVisibility.hexagon40 && (
        <div className={`baseHexagon hexagon40 ${correctAnswer === 40 ? 'bouncebase' : ''} ${wrongAnswer === 40 ? 'bouncebase' : ''}`} onClick={() => handleHexagonClick(40, 0)}>
          <div className={`hexagonText ${hideHexagon40Text ? 'hidden' : ''}`}>{nextQuestion.choices[0]} </div>
        </div>
      )}
      <div className="hexagonScore">
        <div className="scoreText">
          Score: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{score}/{totalQuestions}
        </div>
      </div>
      <div className="hexagonTime">
        <div className="timeText">
          Time: <br />
          {formattedTime} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <div className="hexagonQuestionBg">
      </div>

      <div className="hexagonQuestion">
        <div className="transparentTextBox">{nextQuestion.text}</div>
      </div>
      <img className={`jumpingRobot ${robotPosition.moved ? 'moved' : ''}`} style={{ left: `${robotPosition.left}%`, top: `${robotPosition.top}%` }} src={JumpingRobot} alt="Jumping Robot" />
      {showBackModal && (
        <BackModal
          onProceed={handleProceedToCategorySelection}
          onClose={handleCloseBackModal}
        />
      )}
    </div>
  );
};

export default InternetSkill;