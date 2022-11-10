import "./header.css";
import { FormattedMessage } from "react-intl";
import cvimg from "../../assets/CV_img.png";

function Header() {
  return (
    <div className="dz__header section__padding" id="about">
      <div className="dz__header-content">
        <h1 className="gradient__text">
          <FormattedMessage
            id="headerGreetings.text"
            defaultMessage="Welcome!"
            description="Greetings"
          />
        </h1>
        <p>
          <FormattedMessage
            id="header.text"
            defaultMessage="For more than three years I have been creating various game and
          business projects on Unity, but the beginning of my journey in IT lies
          in web design. Even at school, I loved to take part in various
          olympiads, created websites with the help of different website
          constructors, and now I would like to return to the roots, turning my
          old hobby into my main activity and start writing a new chapter in my
          professional career dedicated to web development!"
            description="Welcome header on app main page"
          />
        </p>
      </div>

      <div className="dz__header-image">
        <img src={cvimg} alt="frontImage" />
      </div>
    </div>
  );
}

export default Header;
