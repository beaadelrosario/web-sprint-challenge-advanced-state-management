import React from "react";
import "./App.css";
import Smurfs from "../components/Smurfs"
import Header from "../components/Header"

export default function App() {
    return (
      <div className="App">
        <Header />
        <h1>Smurf App!</h1>
        <Smurfs />
      </div>
    );
};
