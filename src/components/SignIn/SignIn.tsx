import React from "react";
import "./signin.scss";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event: any) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            label="Email"
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            label="Password"
            handleChange={this.handleChange}
          />

          <div className="buttons">
            <Button type="submit" mode="dark">
              Sign In
            </Button>
            <Button onClick={signInWithGoogle} mode="light">
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
