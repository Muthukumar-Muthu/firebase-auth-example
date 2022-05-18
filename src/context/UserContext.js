import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "../firebase";

export const userContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    onAuthStateChanged(getAuth(app), (user) => {
      setUser(user);
      setPending(false);
    });
  }, []);

  if (pending) return <h1>Loading..</h1>;
  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};
