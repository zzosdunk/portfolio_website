/* eslint-disable import/prefer-default-export */
import { styled, Button } from "@mui/material";

export const LearnSmallButton = styled(Button)(({ theme }) => ({
    height: "100%", // Кнопка будет иметь ту же высоту, что и родительский контейнер
    padding: "10px 16px", // Оставляем стандартные боковые отступы
    fontSize: "16px", // Подстраиваем размер текста под высоту
    textTransform: "none", // Убираем автоматический upper-case для текста
    lineHeight: "normal", // Совпадает с текстовыми элементами
    color: "#fff",
    background:
        theme.palette.mode === "dark"
            ? "linear-gradient(to right, #22edfb 50%, #042c54 50%)"
            : "linear-gradient(to right, #f0d43a 50%, #d6bd33 50%)",
    backgroundSize: "200% 100%",
    backgroundPosition: "right bottom",
    transition: "background-position 0.5s ease, color 0.2s ease",
    textAlign: "center",
    display: "flex", // Flexbox для центрирования
    justifyContent: "center", // Центрирование по горизонтали
    alignItems: "center",
    "&:hover": {
        backgroundPosition: "left bottom",
        color: "#000",
    },
}));
