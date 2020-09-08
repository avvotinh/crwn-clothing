import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInPage from "./pages/SignInPage/SignInPage";
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";

import "./App.scss";

class App extends React.Component<any, any> {
  private unsubscribeFromAuth: any;

  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef?.onSnapshot((snapshot) => {
            this.setState({
              currentUser: { id: snapshot.id, ...snapshot.data() },
            });
          });
        }

        this.setState({
          currentUser: userAuth,
        });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
