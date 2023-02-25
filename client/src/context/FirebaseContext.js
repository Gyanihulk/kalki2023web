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
import { GoogleAuthProvider,createUserWithEmailAndPassword } from "firebase/auth";
import {
  ReCaptchaV3Provider,
  initializeAppCheck,
  getToken,
} from "firebase/app-check";

const Context = createContext();

const provider = new GoogleAuthProvider();

export const FirebaseContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState("no user");
  let appCheck;
    if(user===""){
    const userName=localStorage.getItem("user")
    setUser(userName)
    
  }
  useEffect(() => {
    async function setup() {
      console.log(firebaseConfig)
      appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(
          "abcdefghijklmnopqrstuvwxy-1234567890abcd"
        ),
        isTokenAutoRefreshEnabled: true,
      });
      console.log(process.env.REACT_APP_MEASUREMENT_ID)
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
    await signInWithPopup(auth, provider)
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
  };

  const signUp=async(email, password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  return (
    <Context.Provider value={{  login, loginWithPopUpGoogle, user ,signUp}}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
