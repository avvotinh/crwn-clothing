import React from "react";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

import "./signup.scss";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

class SignUp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const {
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      throw new Error(error);
    }
  };

  handleChanged = (event: any) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            required
            label="Display Name"
            handleChange={this.handleChanged}
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            required
            label="Email"
            handleChange={this.handleChanged}
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            required
            label="Password"
            handleChange={this.handleChanged}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            required
            label="Confirm Password"
            handleChange={this.handleChanged}
          />
          <Button type="submit" mode="dark">
            Sign up
          </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
