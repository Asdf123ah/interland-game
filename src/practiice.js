// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './practiice.css';
// import basicbadge from './Photos/basicBadge.png';
// import internetbadge from './Photos/internetBadge.png';
// import communicationbadge from './Photos/communicationBadge.png';
// import informationbadge from './Photos/informationBadge.png';
// import ConfettiEffect from './Confetti.js'; // Assuming you place ConfettiEffect in the same directory


// function Practice() {
//   const [userStatusData, setUserStatusData] = useState(null);
//   const [showBasicBadgePopup, setShowBasicBadgePopup] = useState(true);
//   const [showCommunicationBadgePopup, setShowCommunicationBadgePopup] = useState(true);
//   const [showInformationBadgePopup, setShowInformationBadgePopup] = useState(true);
//   const [showInternetBadgePopup, setShowInternetBadgePopup] = useState(true);
//   const { userId } = useParams();

//   useEffect(() => {
//     axios.get(`http://localhost:4000/user-status/${userId}`)
//       .then(response => setUserStatusData(response.data))
//       .catch(error => console.error('Error fetching user status:', error));
//   }, [userId]);

//   useEffect(() => {
//     if (userStatusData && userStatusData.categories) {
//       setShowBasicBadgePopup(!userStatusData.categories.some(category =>
//         category.categoryName === 'Basic Computer and Mobile Skill' && category.isWheelSpinning
//       ));
//       setShowCommunicationBadgePopup(!userStatusData.categories.some(category =>
//         category.categoryName === 'Communication Skill' && category.isWheelSpinning
//       ));
//       setShowInformationBadgePopup(!userStatusData.categories.some(category =>
//         category.categoryName === 'Information Literacy Skill' && category.isWheelSpinning
//       ));
//       setShowInternetBadgePopup(!userStatusData.categories.some(category =>
//         category.categoryName === 'Internet Skill' && category.isWheelSpinning
//       ));
//     }
//   }, [userStatusData]);

//   const handleHideBasicBadgePopup = () => {
//     setShowBasicBadgePopup(false);
//   };

//   const handleHideInternetBadgePopup = () => {
//     setShowInternetBadgePopup(false);
//   };

//   const handleHideCommunicationBadgePopup = () => {
//     setShowCommunicationBadgePopup(false);
//   };

//   const handleHideInformationBadgePopup = () => {
//     setShowInformationBadgePopup(false);
//   };

//   return (
//     <div>
//       {(showBasicBadgePopup || showInternetBadgePopup || showCommunicationBadgePopup || showInformationBadgePopup) && (
//           <ConfettiEffect numberOfPieces={500} />
//         )}
//       <div className='abc'>
//         {showBasicBadgePopup && (
//           <div className="popup-statistic">
//             <div className='box-statistic1'>
//               <div className='box-statistic1-label'>
//                 <p>Basic Computer and Mobile Skill Badge</p>
//                 <img src={basicbadge} alt="Basic Badge"/>
//               </div>
//             </div>
//             <div className='box-statistic2'>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae sapien. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. In ornare quam viverra orci sagittis eu. Viverra suspendisse potenti nullam ac.</p>
//             </div>
//             <button className='okay-button-statistic' onClick={handleHideBasicBadgePopup}>Okay</button>
//           </div>
//         )}
//         {!showBasicBadgePopup && showInternetBadgePopup && (
//           <div className="popup-statistic">
//             <div className='box-statistic1'>
//               <div className='box-statistic1-label'>
//                 <p>Internet Skill Badge</p>
//                 <img src={internetbadge} alt="Internet Badge"/>
//               </div>
//             </div>
//             <div className='box-statistic2'>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae sapien. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. In ornare quam viverra orci sagittis eu. Viverra suspendisse potenti nullam ac.</p>
//             </div>
//             <button className='okay-button-statistic' onClick={handleHideInternetBadgePopup}>Okay</button>
//           </div>
//         )}
//         {!showBasicBadgePopup && !showInternetBadgePopup && showCommunicationBadgePopup && (
//           <div className="popup-statistic">
//             <div className='box-statistic1'>
//               <div className='box-statistic1-label'>
//                 <p>Communication Skill Badge</p>
//                 <img src={communicationbadge} alt="Communication Badge"/>
//               </div>
//             </div>
//             <div className='box-statistic2'>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae sapien. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. In ornare quam viverra orci sagittis eu. Viverra suspendisse potenti nullam ac.</p>
//             </div>
//             <button className='okay-button-statistic' onClick={handleHideCommunicationBadgePopup}>Okay</button>
//           </div>
//         )}
//         {!showBasicBadgePopup && !showInternetBadgePopup && !showCommunicationBadgePopup && showInformationBadgePopup && (
//           <div className="popup-statistic">
//             <div className='box-statistic1'>
//               <div className='box-statistic1-label'>
//                 <p>Information Literacy Skill Badge</p>
//                 <img src={informationbadge} alt="Information Badge"/>
//               </div>
//             </div>
//             <div className='box-statistic2'>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae sapien. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. In ornare quam viverra orci sagittis eu. Viverra suspendisse potenti nullam ac.</p>
//             </div>
//             <button className='okay-button-statistic' onClick={handleHideInformationBadgePopup}>Okay</button>
//           </div>
//         )}
//         <div className='abc-badge'>
//           {!showBasicBadgePopup && !showInternetBadgePopup && !showCommunicationBadgePopup && !showInformationBadgePopup && userStatusData && userStatusData.categories && userStatusData.categories.map((category, index) => (
//             category.categoryName === 'Basic Computer and Mobile Skill' && !category.isWheelSpinning ? (
//               <button key={index} className="basic-badge"></button>
//             ) : category.isWheelSpinning ? null : (
//               <button key={index} className={`${
//                 category.categoryName === 'Internet Skill' ? 'internet-badge' :
//                   category.categoryName === 'Communication Skill' ? 'communication-badge' :
//                     category.categoryName === 'Information Literacy Skill' ? 'information-badge' :
//                       ''}`}>
//               </button>
//             )
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Practice;
