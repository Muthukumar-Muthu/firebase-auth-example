import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./routes/Login";
import Home from "./routes/Home";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./context/UserContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/open"
            element={
              <div>
                <h1>Open</h1>
              </div>
            }
          />
          <Route
            path="/close"
            element={
              <PrivateRoute
                element={
                  <div>
                    <h1>close</h1>
                  </div>
                }
              />
            }
          />
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
