import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

// import logo from "../../assets/logo.png";

import { Typography } from "@mui/material";
import { Pets } from "@mui/icons-material";

import {
    MaterialUISwitch,
    StyledToolbar,
    LeftSide,
    Links,
    Logo,
    Functionality,
    Icons,
    NavbarSign,
    MobileNavbarStyled,
} from "./navbar.styles";

import Login from "../Login/Login";
import LanguageMenu from "./LanguageMenu";
import MobileNavbar from "./MobileNavbar";
import { langActions } from "../../store/language";

import { themeActions } from "../../store/theme";

const LINKS = [
    { text: "About", link: "#about" },
    { text: "Experience", link: "#experience" },
    { text: "Skills", link: "#skills" },
    { text: "Projects", link: "#projects" },
    { text: "Contact", link: "#contact" },
];

function Nav() {
    const dispatch = useDispatch();

    const userEmail = useSelector((state) => state.auth.userEmail);
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const currentTheme = useSelector((state) => state.theme.isDarkTheme);

    const userName = userEmail.substr(0, userEmail.indexOf("@"));

    const languageChooseHandler = (chosenLanguage) => {
        dispatch(langActions.changeLanguage(chosenLanguage));
    };

    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const changeThemeHandler = () => {
        setIsDarkTheme((prev) => !prev);
    };

    useEffect(() => {
        dispatch(themeActions.changeTheme(isDarkTheme));
    }, [dispatch, isDarkTheme]);

    return (
        <>
            <StyledToolbar id="home">
                <LeftSide>
                    <Logo>
                        <Typography
                            variant="h6"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        >
                            DENYS ZOSYM
                        </Typography>
                        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                    </Logo>
                    <Links>
                        {LINKS.map((link) => (
                            <Typography key={link.text} variant="a">
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
                            </Typography>
                        ))}
                    </Links>
                </LeftSide>
                <Functionality>
                    <NavbarSign>
                        {!isAuth ? (
                            <Login />
                        ) : (
                            <Typography variant="p">
                                <FormattedMessage
                                    id="GreetingsNavbar.text"
                                    defaultMessage="Hello, "
                                    description="Navbar Greetings"
                                />{" "}
                                {userName}
                            </Typography>
                        )}
                    </NavbarSign>

                    <Icons>
                        <MaterialUISwitch
                            onChange={changeThemeHandler}
                            checked={currentTheme}
                        />
                        <LanguageMenu languageHandler={languageChooseHandler} />
                    </Icons>
                </Functionality>
            </StyledToolbar>
            <MobileNavbarStyled>
                <MobileNavbar links={LINKS} />
                <Functionality>
                    <NavbarSign>
                        {!isAuth ? (
                            <Login />
                        ) : (
                            <Typography variant="p">
                                <FormattedMessage
                                    id="GreetingsNavbar.text"
                                    defaultMessage="Hello, "
                                    description="Navbar Greetings"
                                />{" "}
                                {userName}
                            </Typography>
                        )}
                    </NavbarSign>

                    <Icons>
                        <MaterialUISwitch
                            onChange={changeThemeHandler}
                            checked={currentTheme}
                        />
                        <LanguageMenu languageHandler={languageChooseHandler} />
                    </Icons>
                </Functionality>
            </MobileNavbarStyled>
        </>
    );
}

export default Nav;
