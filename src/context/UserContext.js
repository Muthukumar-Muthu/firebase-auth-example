import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "../firebase";
import { locationContext } from "./LocationContext";
import { Navigate, useNavigate } from "react-router";

export const userContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { ref } = useContext(locationContext);
  useEffect(() => {
    onAuthStateChanged(getAuth(app), (user) => {
      setUser(user);
      console.log(ref);

      if (ref.current) {
        navigate(ref.current);
      }
    });
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};
