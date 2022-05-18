import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";
import app from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  async function clickHandler() {
    try {
      await setPersistence(getAuth(app), browserLocalPersistence);
      await signInWithPopup(getAuth(app), new GoogleAuthProvider());

      navigate("/"); //TODO: use ref.current
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    console.log("login mounted");
  }, []);
  return (
    <div>
      <button onClick={clickHandler}>Login</button>
      <Link to={"/"}>Home</Link>
    </div>
  );
};
export default Login;
