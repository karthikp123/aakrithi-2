import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.initial";
  initializeAuthentication();
  const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setLoading] = useState("false");
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    //google signIn
    const googleSignIn = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          setUser(result.user);
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  
    //email password sign in
    const emailPassSignIn = (email, pass, navigate, name) => {
      createUserWithEmailAndPassword(auth, email, pass)
        .then((result) => {
          // console.log(result.user.emailVerified);
          setUser(result.user);
          // emailVerification();
  
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
          alert(error.message);
        });
    };
  
    // email password login
    const emailPassLogIn = (email, password, navigate) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user);
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
          alert(error.message);
        });
    };
  
    //logout
    const Logout = () => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          setUser({});
        })
        .catch((error) => {
          // An error happened.
        });
    };
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
      });
    }, []);
  
    return {
      googleSignIn,
      user,
      Logout,
      emailPassSignIn,
      emailPassLogIn,
    };
  };
  export default UseFirebase;