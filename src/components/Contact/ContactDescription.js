import { FormattedMessage } from "react-intl";
import { call, map, mail } from "./imports";

import {
    ContactDescriptionStyled,
    HeadTitle,
    Description,
    ContactData,
    ContactDataBlock,
} from "./ContactDescription.styles";

function ContactDescription() {
    return (
        <ContactDescriptionStyled>
            <HeadTitle component="h1">
                <FormattedMessage
                    id="contactMeHeader.text"
                    defaultMessage="Drop Me A Message"
                    description="Send me a message"
                />
            </HeadTitle>
            <Description component="p">
                <FormattedMessage
                    id="contactMeDescription.text"
                    defaultMessage="If, after getting acquainted with my activities, you still have any
            questions or would like to cooperate with me, then you can fill out the
            form on the right side and send me a message!"
                    description="Send me a message description"
                />
            </Description>
            <ContactData>
                <ContactDataBlock>
                    <img src={call} alt="call" />
                    <p>+48 730 527 186</p>
                </ContactDataBlock>
                <ContactDataBlock>
                    <img src={mail} alt="mail" />
                    <a href="mailto:zzosdunk@gmail.com">
                        <p>zzosdunk@gmail.com</p>
                    </a>
                </ContactDataBlock>
                <ContactDataBlock>
                    <img src={map} alt="location" />
                    <p>
                        <FormattedMessage
                            id="contactMeLocation.text"
                            defaultMessage="Cracow, Poland"
                            description="Location"
                        />
                    </p>
                </ContactDataBlock>
            </ContactData>
        </ContactDescriptionStyled>
    );
}

export default ContactDescription;
