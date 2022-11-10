import BlockTitle from "../BlockTitle/BlockTitle";
import ContactDescription from "./ContactDescription";
import ContactForm from "./ContactForm";

import "./ContactMe.css";

function ContactMe() {
  return (
    <div className="dz__contact section__padding" id="contact">
      <BlockTitle translationID="contactBlockTitle" title="CONTACT ME" />
      <div className=".dz__blog-container">
        <div className="dz__contactInfo">
          <ContactDescription />
          <ContactForm />
        </div>
      </div>

    </div>
  );
}

export default ContactMe;
