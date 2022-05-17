import { createContext, useRef } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";
export const locationContext = createContext();

export function LocationProvider({ children }) {
  const location = useLocation();
  const ref = useRef();
  useEffect(() => {
    const path = location.pathname;
    if (path !== "/login") ref.current = path;

    console.log(ref.current);
  }, [location]);

  return (
    <locationContext.Provider value={{ pathToReload: ref.current }}>
      {children}
    </locationContext.Provider>
  );
}
