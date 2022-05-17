import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { userContext } from "./context/UserContext";

const PrivateRoute = ({ element: C }) => {
  const { user } = useContext(userContext);

  return user ? C : <Navigate to={"/login"} />;
};
export default PrivateRoute;
