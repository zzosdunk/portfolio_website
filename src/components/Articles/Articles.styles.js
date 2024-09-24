/* eslint-disable import/prefer-default-export */
import { styled, Typography, CardMedia } from "@mui/material";

export const ImageBlock = styled("div")({
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",
});

export const Image = styled(CardMedia)({
    width: "70%", // Scale to 40% of the original width
    height: "auto", // Maintain aspect ratio
    margin: "auto", // Center the image horizontally
});

export const ImageDescription = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontStyle: "italic", // Italic to distinguish description
    marginTop: "5px",
    textAlign: "center",
    color: theme.palette.mode === "dark" ? "#848884" : "#36454F",
}));

export const BlockHeader = styled(Typography)(({ theme }) => ({
    fontSize: "23px",
    fontWeight: "bold",
    width: "80%",
    marginTop: "20px",
    marginBottom: "20px",
    color: theme.palette.mode === "dark" ? "#f0d43a" : "#22edfb",
}));

export const Text = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: "500",
    width: "100%",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
}));
