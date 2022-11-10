import { useState } from "react";
import { useSelector } from "react-redux";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FormattedMessage } from "react-intl";

import logo from "../../assets/logo.png";
import "./navbar.css";
import Login from "../Login/Login";
import LanguageDropdown from "./LanguageDropdown";

function Navbar() {
  const currentLanguage = useSelector((state) => state.lang.language);
  const userEmail = useSelector((state) => state.auth.userEmail);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const [toggleMenu, setToggleMenu] = useState(false);

  const userName = userEmail.substr(0, userEmail.indexOf("@"));

  const LINKS = [
    { text: "About", link: "#about" },
    { text: "Experience", link: "#experience" },
    { text: "Skills", link: "#skills" },
    { text: "Projects", link: "#projects" },
    { text: "Contact", link: "#contact" },
  ];

  return (
    <div className="dz__navbar" id="home">
      <div className="dz__navbar-links">
        <div className="dz__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dz__navbar-links_container">
          {LINKS.map((link) => (
            <p key={link.text}>
              <a href={link.link}>
                <FormattedMessage
                  id={`${link.text}NavbarElement.text`}
                  defaultMessage="{sectionID}"
                  description="Navbar Element"
                  values={{
                    sectionID: link.text,
                  }}
                />
              </a>
            </p>
          ))}
        </div>
      </div>

      <div className="dz__navbar-sign">
        {!isAuth ? <Login /> : (
          <p>
            <FormattedMessage
              id="GreetingsNavbar.text"
              defaultMessage="Hello, "
              description="Navbar Greetings"
            />
            {" "}
            {userName}
          </p>
        )}
      </div>
      <LanguageDropdown chosenLanguage={currentLanguage} />
      <div className="dz__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="dz__navbar-menu_container scale-up-center">
            <div className="dz__navbar-menu_container-links">
              {LINKS.map((link) => (
                <p key={link.text}>
                  <a href={link.link}>{link.text}</a>
                </p>
              ))}
            </div>
          </div>

        )}
      </div>
    </div>
  );
}

export default Navbar;
