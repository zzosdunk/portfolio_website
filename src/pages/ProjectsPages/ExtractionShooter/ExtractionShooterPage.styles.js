import { styled } from "@mui/material";

export const GridContainer = styled("div")(() => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 ячейки в ряду
    gap: "20px", // Отступы между ячейками
    padding: "20px",
}));

export const GridItem = styled("div")(() => ({
    position: "relative",
    overflow: "visible",
    textAlign: "center",
}));

export const GridImage = styled("img")(() => ({
    width: "70%",
    height: "auto",
    transition: "transform 0.3s ease, z-index 0.3s ease, borderRadius 1s ease",
    cursor: "pointer",
    borderRadius: "8px",
    "&:hover": {
        transform: "scale(1.5)", // Увеличение изображения
        zIndex: 2, // Вывод поверх других элементов
        borderRadius: "0px",
    },
}));

export const GridImageCaption = styled("div")(({ theme }) => ({
    marginTop: "10px",
    fontSize: "1rem",
    fontWeight: "500",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
}));
