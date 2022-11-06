import useInput from "../../hooks/use-input";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

import { authActions } from "../../store/auth";
import styles from "./Login.module.css";

const Login = () => {

  const dispatch = useDispatch();

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login(enteredEmail));

    resetEmailInput();
  };

  return (
    <div className={styles.dz__login_form}>
      <form onSubmit={loginHandler}>
        <input type="email" placeholder="Email..." value={enteredEmail} onChange={emailChangedHandler} onBlur={emailBlurHandler}/>
        <button type="submit" disabled={!enteredEmailIsValid}><FormattedMessage
            id="loginButton.text"
            defaultMessage="Log In"
            description="Log In"
          /></button>
      </form>
    </div>
  );
};

export default Login;
