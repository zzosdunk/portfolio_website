import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.png";
import "./navbar.css";
import { authActions } from "../../store/auth";
import Login from "../Login/Login";

const Navbar = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth.userEmail);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const [toggleMenu, setToggleMenu] = useState(false);

  const userName = userEmail.substr(0, userEmail.indexOf('@'));

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <div className="dz__navbar">
      <div className="dz__navbar-links">
        <div className="dz__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="dz__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wdz">Experience</a>
          </p>
          <p>
            <a href="#skills">Skills</a>
          </p>
          <p>
            <a href="#possibility">Projects</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
      <div className="dz__navbar-sign">
        {/* <form onSubmit={loginHandler}>
          <button type="submit">Sign in</button>
        </form> */}
        {!isAuth ? <Login /> : <p>Hello, {userName}</p>}
      </div>
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
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wdz">Experience</a>
              </p>
              <p>
                <a href="#skills">Skills</a>
              </p>
              <p>
                <a href="#possibility">Projects</a>
              </p>
              <p>
                <a href="#contact">Contact</a>
              </p>
            </div>
            <div className="dz__navbar-menu_container-links-sign">
              <button type="button" onClick={loginHandler}>
                Sign in
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
