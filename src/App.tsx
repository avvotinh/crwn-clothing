import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInPage from "./pages/SignInPage/SignInPage";
import CheckoutPage from "./pages/Checkout/Checkout";
import { setCurrentUser } from "./redux/user/userAction";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.user.currentUser);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      }

      dispatch(setCurrentUser(userAuth));
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)} />
      </Switch>
    </div>
  );
};

export default App;
