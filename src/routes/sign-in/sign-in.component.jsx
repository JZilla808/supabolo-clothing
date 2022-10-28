import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";

const SignIn = () => {
  // Log user in with Google Redirect
  useEffect(() => {
    async function _getRedirectResult() {
      const response = await getRedirectResult(auth);

      //   if Google authentification was successful, create user document
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }

    // Run getRedirectResult function once on component mount
    _getRedirectResult();
  });

  //   Log user in with Google Popup
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  //   Render the login component
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
