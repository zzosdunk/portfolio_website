/* eslint-disable */

import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { NavbarStyled, NavbarItem } from "./MobileNavbar.styles";

function MobileNavbar({ links }) {
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
            <MenuIcon onClick={handleClick} sx={{ width: 30, height: 30 }}>
                Dashboard
            </MenuIcon>
            <NavbarStyled
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {links.map((link) => (
                    <NavbarItem>
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
                    </NavbarItem>
                ))}
            </NavbarStyled>
        </>
    );
}

MobileNavbar.propTypes = {
    languageHandler: PropTypes.array.isRequired,
};

export default MobileNavbar;
