import "./ContactDescription.css";
import { call, map, mail } from './imports';
import { FormattedMessage } from "react-intl";

const ContactDescription = () => {
  return (
    <div className="dz__contactDescription">
      <h1 className="gradient__text"><FormattedMessage
            id="contactMeHeader.text"
            defaultMessage="Drop Me A Message"
            description="Send me a message"
          /></h1>
      <p>
      <FormattedMessage
            id="contactMeDescription.text"
            defaultMessage="If, after getting acquainted with my activities, you still have any
            questions or would like to cooperate with me, then you can fill out the
            form on the right side and send me a message!"
            description="Send me a message description"
          />
      </p>
      <div className="dz__contactData">
        <div className="dz__contactDataBlock">
          <img src={call} alt="call"></img>
          <p>+48 730 527 186</p>
        </div>
        <div className="dz__contactDataBlock">
          <img src={mail} alt="mail"></img>
          <a href="mailto:zzosdunk@gmail.com"><p>zzosdunk@gmail.com</p></a>
        </div>
        <div className="dz__contactDataBlock">
          <img src={map} alt="location"></img>
          <p><FormattedMessage
            id="contactMeLocation.text"
            defaultMessage="Cracow, Poland"
            description="Location"
          /></p>
        </div>
      </div>
    </div>
  );
};

export default ContactDescription;
