// import React from 'react';
// // import { search, githubLogo } from '../../public/assets';
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { ToastContainer, toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { addUser, removeUser } from '../redux/crispSlice';
// import { useNavigate } from 'react-router-dom';

import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/crispSlice';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase.config'; // Import the initialized app

const Login = () => {
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth(app); // Use the initialized app here
    const handleLogin = (e) => {
      console.log('API Key:', process.env.REACT_APP_FIREBASE_API_KEY);
console.log('Auth Domain:', process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
      e.preventDefault(); // Prevent the default form submission
// dispatch(console.log(ser.id))
      signInWithPopup(auth, provider)
          .then((result) => {
              const user = result.user;
              dispatch(addUser({
                  id: user.uid, // Changed from user.id to user.uid
                  name: user.displayName,
                  email: user.email,
                  image: user.photoURL,
              }));

              setTimeout(() => {
                  navigate('/');
              }, 1500);

              toast.success('Successfully Signed In');
          })
          .catch((error) => {
              console.log(error);
              toast.error('Sign In Failed');
          });
  };

  const handleLogOut = () => {
      const auth =getAuth();
      signOut(auth)
          .then(() => {
              dispatch(removeUser());
              toast.success('Successfully Signed Out');
          })
          .catch((error) => {
              console.error("Sign Out Error: ", error); // Detailed error logging
              toast.error('Sign Out Failed');
          });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64">
    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-8">
      <div 
        onClick={handleLogin} 
        className="text-base w-52 sm:w-60 h-12 tracking-wide border-[1px] border-gray-600 rounded-md flex items-center gap-2 hover:border-blue-600 cursor-pointer duration-300 justify-center"
      >
        <img className="w-6" 
        // src={search}
        src='/assets/search.png'
         alt="googleLogo" />
        <p className="text-md text-gray-900">Sign in with Google</p>
      </div>
      <button 
        onClick={handleLogOut} 
        className="bg-black text-white text-base py-3 px-6 sm:px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300 mt-4 sm:mt-0"
      >
        Sign Out
      </button>
    </div>
  
    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-8">
      <div 
        className="text-base w-52 sm:w-60 h-12 tracking-wide border-[1px] border-gray-600 rounded-md flex items-center gap-2 hover:border-blue-600 cursor-pointer duration-300 justify-center"
      >
        <img className="w-6"
        // src={githubLogo}
        src='/assets/githubLogo.png' 
        alt="githubLogo" />
        <p className="text-md text-gray-900">Sign in with Github</p>
      </div>
      <button 
        className="bg-black text-white text-base py-3 px-6 sm:px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300 mt-4 sm:mt-0"
      >
        Sign Out
      </button>
    </div>
  
    <ToastContainer
      position="top-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </div>
  
  
  )
};

export default Login;



// const Login = () => {
//     const provider = new GoogleAuthProvider();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const auth = getAuth();

 
 
// }

// export default Login
