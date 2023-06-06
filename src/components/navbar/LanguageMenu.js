import * as React from "react";

import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { LanguageIconStyled } from "./LanguageMenu.styles";
import { NavbarStyled, NavbarItem } from "./MobileNavbar.styles";

function LanguageMenu({ languageHandler }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <LanguageIconStyled
                onClick={handleClick}
                sx={{ width: 30, height: 30 }}
            >
                Dashboard
            </LanguageIconStyled>
            <NavbarStyled
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <NavbarItem onClick={() => languageHandler("English")}>
                    <FormattedMessage
                        id="EnglishLanguage.text"
                        defaultMessage="English"
                        description="CurrentLanguage Element"
                    />
                </NavbarItem>
                <NavbarItem onClick={() => languageHandler("Polish")}>
                    <FormattedMessage
                        id="PolishLanguage.text"
                        defaultMessage="Polish"
                        description="CurrentLanguage Element"
                    />
                </NavbarItem>
                <NavbarItem onClick={() => languageHandler("Ukrainian")}>
                    <FormattedMessage
                        id="UkrainianLanguage.text"
                        defaultMessage="Ukrainian"
                        description="CurrentLanguage Element"
                    />
                </NavbarItem>
            </NavbarStyled>
        </>
    );
}

LanguageMenu.propTypes = {
    languageHandler: PropTypes.func.isRequired,
};

export default LanguageMenu;
