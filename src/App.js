import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Directory from "./components/Directory/Directory";
import { HomePage } from "./pages/HomePage/HomePage";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="homepage">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
