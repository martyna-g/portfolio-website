import React, { Fragment } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default App;
