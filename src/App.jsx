import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Quiz from "./Quizmain";

function App() {
  return (
    <>
      <Menu />
      <Quiz />
    </>
  );
}

export default App;
