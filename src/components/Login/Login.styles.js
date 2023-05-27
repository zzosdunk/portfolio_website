import { Box, styled, TextField } from "@mui/material";

export const LoginForm = styled(Box)({
    width: "400px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
});

export const Input = styled(TextField)(({ theme }) => ({
    color:
        theme.palette.mode === "dark"
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
}));
