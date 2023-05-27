import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

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
            <LanguageIcon onClick={handleClick} sx={{ width: 30, height: 30 }}>
                Dashboard
            </LanguageIcon>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => languageHandler("English")}>
                    <FormattedMessage
                        id="EnglishLanguage.text"
                        defaultMessage="English"
                        description="CurrentLanguage Element"
                    />
                </MenuItem>
                <MenuItem onClick={() => languageHandler("Polish")}>
                    <FormattedMessage
                        id="PolishLanguage.text"
                        defaultMessage="Polish"
                        description="CurrentLanguage Element"
                    />
                </MenuItem>
                <MenuItem onClick={() => languageHandler("Ukrainian")}>
                    <FormattedMessage
                        id="UkrainianLanguage.text"
                        defaultMessage="Ukrainian"
                        description="CurrentLanguage Element"
                    />
                </MenuItem>
            </Menu>
        </>
    );
}

LanguageMenu.propTypes = {
    languageHandler: PropTypes.func.isRequired,
};

export default LanguageMenu;
