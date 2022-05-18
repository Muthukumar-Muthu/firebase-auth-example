import { createContext, useRef } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";
export const locationContext = createContext();

export function LocationProvider({ children }) {
  const location = useLocation();
  const locationRef = useRef();
  useEffect(() => {
    const path = location.pathname;
    if (path !== "/login") locationRef.current = path; //TODO: fix use object
  }, [location]);

  return (
    <locationContext.Provider value={{ locationRef }}>
      {children}
    </locationContext.Provider>
  );
}
