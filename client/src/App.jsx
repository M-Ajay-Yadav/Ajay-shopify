import { useState } from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      {/* <Routes>
        <Route path="/" />
      </Routes> */}
    </div>
  );
}

export default App;
