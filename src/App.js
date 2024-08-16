import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainHome from "./page/MainHome";
import MainCompany from "./page/MainCompany";
import MainNotice from "./page/MainNotice";
import MainSolution from "./page/MainSolution";
import MainContactUs from "./page/MainContactUs";
import Header from "./components/Header";
import ScrollTop from "./components/com/common/ScrollTop";

function App() {
  return (
    <div>
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/company" element={<MainCompany />} />
        <Route path="/notice" element={<MainNotice />} />
        <Route path="/contact" element={<MainContactUs />} />
        <Route path="/solution" element={<MainSolution />} />
      </Routes>
    </div>
  );
}

export default App;
