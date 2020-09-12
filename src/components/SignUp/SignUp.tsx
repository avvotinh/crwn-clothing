import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./signup.scss";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const SignUp = () => {
  const initState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [state, setState] = useState(initState);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      throw new Error(error);
    }
  }

  function handleChanged(event: any) {
    const { value, name } = event.target;

    setState({ ...state, [name]: value });
  }

  const { displayName, email, password, confirmPassword } = state;

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          required
          label="Display Name"
          handleChange={handleChanged}
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label="Email"
          handleChange={handleChanged}
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          label="Password"
          handleChange={handleChanged}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          label="Confirm Password"
          handleChange={handleChanged}
        />
        <Button type="submit" mode="dark">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
