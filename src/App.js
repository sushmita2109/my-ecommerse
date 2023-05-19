import "./App.css";
import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Mockman } from "./pages/Mockman";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
