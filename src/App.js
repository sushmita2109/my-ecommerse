import "./App.css";
import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Mockman } from "./pages/Mockman";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
