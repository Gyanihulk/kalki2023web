import React, {
  useContext,
  createContext,
  useState,
  children,
  useEffect,
} from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app, auth, firebaseConfig } from "../firebase/firebaseConfig";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  ReCaptchaV3Provider,
  initializeAppCheck,
  getToken,
} from "firebase/app-check";

import { useNavigate } from "react-router-dom";
const { CustomProvider } = require("firebase/app-check");

export const Context = createContext();
const provider = new GoogleAuthProvider();

const appCheckCustomProvider = new CustomProvider({
  getToken: () => {
    return new Promise((resolve, _reject) => {
      // TODO: Logic to exchange proof of authenticity for an App Check token and
      // expiration time.

      // ...
      const tokenFromServer = "abc1234";
      const expirationFromServer = 1234;
      const appCheckToken = {
        token: tokenFromServer,
        expireTimeMillis: expirationFromServer * 1000,
      };
      resolve(appCheckToken);
    });
  },
});

export const FirebaseContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("no user");

  const navigate = useNavigate();
  if (user === "") {
    const userName = localStorage.getItem("user");
    setUser(userName);
  }
  useEffect(() => {
    async function setup() {
      const appCheck = initializeAppCheck(app, {
        provider: appCheckCustomProvider,
        isTokenAutoRefreshEnabled: true,
      });
      console.log(appCheck, "appcheck");
    }
    setup();
  }, []);
  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const loginWithPopUpGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(credential);
        setUser(user.displayName);
        localStorage.setItem("user", user.displayName);
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    // const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
    // console.log(userCred,"userCred")
  };

  const signUp = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <Context.Provider
      value={{
        login,
        loginWithPopUpGoogle,
        user,
        signUp,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
