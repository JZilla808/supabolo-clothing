import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // Log user in with Google Redirect (optional)
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

  //   Log user in with Google Popup. Got moved to sign-in-form component. No longer needed.

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  //   Render the login component
  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
      {/* method to log user in with Google Redirect (optional) */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
