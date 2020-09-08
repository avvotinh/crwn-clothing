import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userAction";

import { HomePage } from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInPage from "./pages/SignInPage/SignInPage";

import "./App.scss";

class App extends React.Component<any, any> {
  private unsubscribeFromAuth: any;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef?.onSnapshot((snapshot) => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            });
          });
        }

        setCurrentUser(userAuth);
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }: { user: any }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
