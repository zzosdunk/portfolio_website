import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Button } from "@mui/material";

import useInput from "../../hooks/use-input";
import { LoginForm, Input } from "./Login.styles";
import { authActions } from "../../store/auth";

function Login() {
    const dispatch = useDispatch();

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangedHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes("@"));

    const loginHandler = (event) => {
        event.preventDefault();

        dispatch(authActions.login(enteredEmail));

        resetEmailInput();
    };

    return (
        <LoginForm>
            <form onSubmit={loginHandler}>
                <Input
                    hiddenLabel
                    placeholder="Email..."
                    variant="filled"
                    size="small"
                    id="email-input"
                    type="email"
                    value={enteredEmail}
                    onChange={emailChangedHandler}
                />
                <Button type="submit" disabled={!enteredEmailIsValid}>
                    <FormattedMessage
                        id="loginButton.text"
                        defaultMessage="Log In"
                        description="Log In"
                    />
                </Button>
            </form>
        </LoginForm>
    );
}

export default Login;
