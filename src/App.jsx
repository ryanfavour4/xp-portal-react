import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Routes";

import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
