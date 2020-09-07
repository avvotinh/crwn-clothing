import React from "react";
import "./signInPage.scss";
import SignIn from "../../components/SignIn/SignIn";

class SignInPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default SignInPage;
