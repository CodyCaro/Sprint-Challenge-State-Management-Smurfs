import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Use the form below to add a smurf to your village!</div>
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
