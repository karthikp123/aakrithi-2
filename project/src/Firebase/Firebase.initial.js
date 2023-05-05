import { initializeApp } from "firebase/app";
const initializeAuthentication = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCnHDPjesnbqABDju5uKmUgNDFkGHlW1o8",
    authDomain: "aakrithi-38f81.firebaseapp.com",
    projectId: "aakrithi-38f81",
    storageBucket: "aakrithi-38f81.appspot.com",
    messagingSenderId: "1053704133610",
    appId: "1:1053704133610:web:99bccf7803ce7c9446f093"
  };
  const app = initializeApp(firebaseConfig);
};

export default initializeAuthentication;