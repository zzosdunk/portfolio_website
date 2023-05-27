import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

import emailjs from "emailjs-com";

import {
    ContactFormStyled,
    Form,
    Login,
    SendButton,
} from "./ContactForm.styles";

function ContactForm() {
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

    const userEmail = useSelector((state) => state.auth.userEmail);
    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    const form = useRef();

    const emailValue = getValues("email");

    useEffect(() => {
        if (isAuth) {
            setValue("email", userEmail);
        }
    }, [isAuth, emailValue, userEmail, setValue]);

    const sendEmail = () => {
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        );

        resetField("email");
        resetField("subject");
        resetField("message");
    };

    return (
        <ContactFormStyled>
            <Form>
                <Login onSubmit={handleSubmit(sendEmail)} ref={form}>
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        // eslint-disable-next-line react/jsx-props-no-spreading
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
                    />
                    {errors.email && <p>{errors.email?.message}</p>}
                    <input
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...register("subject", {
                            required: {
                                value: true,
                                message:
                                    "You must specify your first name before moving forward",
                            },
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message:
                                    "That's not a valid name where I come from...",
                            },
                        })}
                    />
                    {errors.subject && <p>{errors.subject?.message}</p>}
                    <textarea
                        name="message"
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...register("message", {
                            required: {
                                value: true,
                                message: "The message should not be empty",
                            },
                            maxLength: 280,
                        })}
                    />
                    {errors.message && <p>{errors.message?.message}</p>}
                    <SendButton type="submit" disabled={!isValid}>
                        Send
                    </SendButton>
                </Login>
            </Form>
        </ContactFormStyled>
    );
}

export default ContactForm;
