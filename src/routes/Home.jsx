import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => signOut(getAuth(app))}>Logout</button>
      <Link to={"/close"}>Close</Link>
    </div>
  );
};
export default Home;
