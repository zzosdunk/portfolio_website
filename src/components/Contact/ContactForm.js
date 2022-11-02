import { useSelector } from "react-redux";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import emailjs from "emailjs-com";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const {
    register,
    handleSubmit,
    formState: { erorrs },
    watch
  } = useForm();

  const form = useRef();


  let formIsValid = true;


  const sendEmail = (event) => {

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID
    );

  };

  return (
    <div className={styles.dz__contactform}>
      <div className={styles.dz__form}>
        <form
          className={styles.dz__contact_login}
          onSubmit={handleSubmit(sendEmail)}
          ref={form}
        >
          <input
            type="text"
            placeholder="Email"
            {...register("sender", { required: "This is required" })}
            name="sender"
          ></input>
          <input
            type="text"
            placeholder="Subject"
            {...register("subject", {
              required: "This is required",
              minLength: { value: 4, message: "Min length is 4" },
            })}
            name="subject"
          ></input>
          <textarea
            id="message"
            placeholder="Type a message..."
            {...register("message", {required: 'This is required'})}
            name="message"
          ></textarea>
          <button
            className={styles.dz__sendButton}
            type="submit"
            disabled={!formIsValid}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
