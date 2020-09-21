import React, { Fragment } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import "./styles/App.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Work />
    </Fragment>
  );
}

export default App;
