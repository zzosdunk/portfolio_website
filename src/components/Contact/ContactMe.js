/* eslint-disable */

import { styled, Box } from "@mui/material";
import BlockTitle from "../BlockTitle/BlockTitle";
import ContactDescription from "./ContactDescription";
import ContactForm from "./ContactForm";

import { Contact, ContactContainer, ContactInfo } from "./ContactMe.styles";

function ContactMe() {
    return (
        <Contact id="contact">
            <BlockTitle translationID="contactBlockTitle" title="CONTACT ME" />
            <ContactContainer>
                <ContactInfo>
                    <Box>
                        <ContactDescription />
                    </Box>
                    <Box>
                        <ContactForm />
                    </Box>
                </ContactInfo>
            </ContactContainer>
        </Contact>
    );
}

export default ContactMe;
