import React, { useState } from "react";
import "./signin.scss";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [state, setState] = useState({ email: "", password: "" });

  async function handleSubmit(event: any) {
    event.preventDefault();

    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({ email: "", password: "" });
    } catch (error) {
      throw new Error(error);
    }
  }

  function handleChange(event: any) {
    const { value, name } = event.target;

    setState({ ...state, [name]: value });
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={state.email}
          required
          label="Email"
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          required
          label="Password"
          handleChange={handleChange}
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
};

export default SignIn;
