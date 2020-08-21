import React, { useState } from "react";
import "./style/App.css";
import LitterForm from "./components/LitterForm";
import PuppyForm from "./components/PuppyForm";
import OwnerForm from "./components/OwnerForm";
import { Switch, Route } from "react-router-dom";
//todo paw print as icon/on home page
//todo POPUP TUTORIAL for new users

function App() {
  return (
    <div className="App">
      <h1> Puppy Tracker </h1>
      <Switch>
        {/* //todo path to /litter */}
        <Route path="/" component={LitterForm} exact />
        <Route path="/puppy" component={PuppyForm} />
        <Route path="/owner" component={OwnerForm} />
      </Switch>
    </div>
  );
}

export default App;
