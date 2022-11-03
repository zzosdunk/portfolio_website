import useInput from "../../hooks/use-input";
import { useDispatch } from "react-redux";

import { authActions } from "../../store/auth";
import styles from "./Login.module.css";

const Login = () => {

  const dispatch = useDispatch();

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
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
        <input type="email" placeholder="Your Email Address" value={enteredEmail} onChange={emailChangedHandler} onBlur={emailBlurHandler}/>
        {emailInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
        <button type="submit" disabled={!enteredEmailIsValid}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
