import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Routes";

import "./App.css";
// import { BookContext } from "./context/BookContext";
import { FacultyContext } from "./context/FacultyContext";

function App() {

  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
