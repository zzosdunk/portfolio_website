import { useSelector } from "react-redux";
import { useRef } from "react";
import useInput from "../../hooks/use-input";

import emailjs from "emailjs-com";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const userEmail = useSelector((state) => state.auth.userEmail);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const form = useRef();

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangedHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredEmailIsValid || isAuth && enteredSubjectIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_s5fkmsb",
        "template_dta7bw4",
        form.current,
        "2algFDK7uP97qEKRZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      resetEmailInput();
      resetSubjectInput();
      resetMessageInput();
  };

  console.log(formIsValid);

  return (
    <div className={styles.dz__contactform}>
      <div className={styles.dz__form}>
        <form className={styles.dz__contact_login} onSubmit={sendEmail} ref={form}>
        <input
            type="text"
            placeholder="Email"
            name="from_name"
            value={!isAuth ? enteredEmail : userEmail}
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
          ></input>
          {emailInputHasError && <p>Please enter a valid email</p>}
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={enteredSubject}
            onChange={subjectChangedHandler}
            onBlur={subjectBlurHandler}
          ></input>
          {subjectInputHasError && <p>Please enter a subject</p>}
          <textarea
            id="message"
            placeholder="Type a message..."
            name="message"
            value={enteredMessage}
            onChange={messageChangedHandler}
            onBlur={messageBlurHandler}
          ></textarea>
          {messageInputHasError && <p>Please enter a message</p>}
          <button className={styles.dz__sendButton} type="submit" disabled={!formIsValid}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
