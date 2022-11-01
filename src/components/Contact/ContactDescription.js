import "./ContactDescription.css";
import { call, map, mail } from './imports';

const ContactDescription = () => {
  return (
    <div className="dz__contactDescription">
      <h1 className="gradient__text">Drop Me A Message</h1>
      <p>
        If, after getting acquainted with my activities, you still have any
        questions or would like to cooperate with me, then you can fill out the
        form on the right side and send me a message!
      </p>
      <div className="dz__contactData">
        <div className="dz__contactDataBlock">
          <img src={call} alt="call"></img>
          <p>+48 730 527 186</p>
        </div>
        <div className="dz__contactDataBlock">
          <img src={mail} alt="mail"></img>
          <p>zzosdunk@gmail.com</p>
        </div>
        <div className="dz__contactDataBlock">
          <img src={map} alt="location"></img>
          <p>Cracow, Poland</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDescription;
