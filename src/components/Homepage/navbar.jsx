// import React, { useState } from 'react';

// import Login from './auth/login';
// import Registration from './auth/register';
// import { useAuth } from './auth/AuthContext';
// import "../styles/navbar.css";
// // import { Navigate } from 'react-router-dom';

// // const navigate = Navigate();

// const Navbar = () => {
//   const { currentUser, logout } = useAuth();
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);
  

//   const handleLoginClick = () => {
//     setShowLogin(true);
//   };

//   const handleRegisterClick = () => {
//     setShowRegister(true);
//   };

//   const handleLogoutClick = () => {
//     // Implement logout logic
//     logout();
//     setShowLogin(false);
//     setShowRegister(false);
//     // navigate("/");
//   };

//   return (
//     <div className='navbar'>
//       {/* Navigation bar */}
//       <nav>
//         <ul>
//           {currentUser ? (
//             <li><button onClick={handleLogoutClick}>Logout</button></li>
//           ) : (
//             <>
//               <li><button onClick={handleLoginClick}>Login</button></li>
//               <li><button onClick={handleRegisterClick}>Register</button></li>
              
//             </>
//           )}
//         </ul>
//       </nav>

//       {/* Login Popup */}
//       {showLogin &&         
//         <Login  onClose={() => setShowLogin(false)} />
//         }

//       {/* Register Popup */}
//       {showRegister && 
//         <Registration  onClose={() => setShowRegister(false)}/>
//         }
//     </div>
//   );
// };

// export default Navbar;

// Navbar.js
import React, { useState } from 'react';
import Login from './auth/login';
import Registration from './auth/register';
import { useAuth } from './auth/AuthContext';
import '../styles/navbar.css';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='navbar'>
      <nav>
        <ul>
          {/* <a><li>About us</li></a>
          <a><li>Contact us</li></a> */}
          <a href='/About'>About us</a>
          <a href='/Contact'>Contact us</a>
          {currentUser ? (
            <li><button onClick={handleLogout}>Logout</button></li>
          ) : (
            <>
              <li><button onClick={openLoginModal}>Login</button></li>
              <li><button onClick={openRegisterModal}>Register</button></li>
            </>
          )}
        </ul>
      </nav>

      {/* Login Modal */}
      

      {/* Register Modal */}
      {/* <div className={`modal ${showRegisterModal ? 'active' : ''}`}>
        <Registration onClose={closeRegisterModal} />
      </div> */}

      {showLoginModal && (<div className= "modal">
        <div className='overlay'> </div>
        <div className='modal-content'>
        <Login onClose={closeLoginModal} />
        <button className="close-modal" onClick={closeLoginModal}>
              CLOSE
            </button>
        </div>
      </div>)}

      {showRegisterModal && (<div className= "modal">
        <div className='overlay'> </div>
        <div className='modal-content'>
        <Registration onClose={closeRegisterModal} />
        <button className="close-modal" onClick={closeRegisterModal}>
              CLOSE
            </button>
        </div>
      </div>)}
    </div>
  );
};

export default Navbar;

