import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInPage from "./pages/SignInPage/SignInPage";
import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
