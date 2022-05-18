import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "../firebase";
import { locationContext } from "./LocationContext";
import { Navigate, useNavigate } from "react-router";

export const userContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { locationRef } = useContext(locationContext);
  useEffect(() => {
    onAuthStateChanged(getAuth(app), (user) => {
      setUser(user);
      if (locationRef.current) {
        navigate(locationRef.current);
      }
    });
  }, []);

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};
