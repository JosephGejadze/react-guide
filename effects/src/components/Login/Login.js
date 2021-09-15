import React, { useEffect, useReducer, useContext } from "react";
import loginReducer, {
  BLUR_EMAIL,
  BLUR_PASSWORD,
  INPUT_EMAIL,
  INPUT_PASSWORD,
  VALIDATE_FORM,
} from "./reducer";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/auth-context";

const Login = () => {
  const [formState, dispatchForm] = useReducer(loginReducer, {
    email: "",
    emailIsValid: null,
    formIsValid: null,
    password: "",
    passwordIsValid: null,
  });

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatchForm({ type: VALIDATE_FORM });
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [formState.emailIsValid, formState.passwordIsValid]);

  const handleEmailChange = (event) => {
    dispatchForm({ type: INPUT_EMAIL, value: event.target.value });
  };

  const handlePasswordChange = (event) => {
    dispatchForm({ type: INPUT_PASSWORD, value: event.target.value });
  };

  const handleEmailBlur = () => {
    dispatchForm({ type: BLUR_EMAIL });
  };

  const handlePasswordBlur = () => {
    dispatchForm({ type: BLUR_PASSWORD });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authCtx.onLogin(formState.email, formState.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={handleSubmit}>
        <div
          className={`${classes.control} ${
            formState.emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formState.formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
