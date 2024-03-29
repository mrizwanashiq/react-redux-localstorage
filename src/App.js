import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="contain">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
