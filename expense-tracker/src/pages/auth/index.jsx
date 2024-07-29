

// For user authentication

import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import "./style.css";

// Exporting our Authentication component that we had built
export const Auth = () => {

  // useNavigate() hook is used to redirect to a different route within your React application without needing to use a history object directly.  
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    //This is going to be a asynchronous call since, signInWithPopup will return a promise

    const results = await signInWithPopup(auth, provider);

    //As of now, I want to keep track of basic info that are required :
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };


    // Stored the bunch of information in local storage of the browser
    // We cant store objects in local storage
    // So, I have strinified "authInfo" and then stored it in local storage
    localStorage.setItem("auth", JSON.stringify(authInfo));

    //Directly navigating to /expense-tracker page for the given user after authentication
    navigate("/expense-tracker");
  };

  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }

  // We are using google authenication over here
  return (
    <div className="login-page">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        {" "}
        Sign In With Google
      </button>
    </div>
  );
};
