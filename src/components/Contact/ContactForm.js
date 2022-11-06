import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

import emailjs from "emailjs-com";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    resetField,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });
  console.log(errors);

  const userEmail = useSelector((state) => state.auth.userEmail);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const form = useRef();

  const emailValue = getValues("email");

  useEffect(() => {
    if (isAuth) {
      setValue("email", userEmail)
    } 
  }, [isAuth, emailValue, userEmail, setValue]);

  const sendEmail = (data) => {
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID
    );

    resetField('email');
    resetField('subject');
    resetField('message');
  }

  return (
    <div className={styles.dz__contactform}>
      <div className={styles.dz__form}>
        <form
          className={styles.dz__contact_login}
          onSubmit={handleSubmit(sendEmail)}
          ref={form}
        >
            <input
              name="email"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please, enter your email",
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please, enter valid email",
                },
              })}
            ></input>
          {errors.email && <p>{errors.email?.message}</p>}
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            {...register("subject", {
              required: {
                value: true,
                message:
                  "You must specify your first name before moving forward",
              },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "That's not a valid name where I come from...",
              },
            })}
          ></input>
          {errors.subject && <p>{errors.subject?.message}</p>}
          <textarea
            name="message"
            {...register("message", {
              required: {
                value: true,
                message: "The message should not be empty",
              },
              maxLength: 280,
            })}
          ></textarea>
          {errors.message && <p>{errors.message?.message}</p>}
          <button
            className={styles.dz__sendButton}
            type="submit"
            disabled={!isValid}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
