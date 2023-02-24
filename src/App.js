import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Cards from "./cards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Cards" element={<Cards />} />
    </Routes>
  );
}

export default App;
