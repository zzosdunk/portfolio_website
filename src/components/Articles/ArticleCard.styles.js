import { styled, Typography, Link } from "@mui/material";

// Контейнер для всей карточки с фоном headerImg
export const ArticleStyled = styled("div")(({ headerImg }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    height: "250px",
    padding: "16px",
    borderRadius: "8px",
    overflow: "hidden",
    background: `url(${headerImg}) no-repeat center center / cover`, // Фон - изображение на всю карточку
    "&:hover": {
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    },
}));

// Слой для размытия изображения
export const ImageBlurOverlayStyled = styled("div")(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Лёгкое затемнение
    backdropFilter: "blur(6px)", // Размытие фона
    zIndex: 1, // Убедимся, что этот слой под текстом
}));

// Блок для контента внутри карточки
export const ContentStyled = styled("div")(() => ({
    zIndex: 2, // Контент над фоном и размытием
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    padding: "10px",
}));

// Стили для изображения слева
export const ImageWrapperStyled = styled("div")(() => ({
    width: "150px",
    height: "150px",
    overflow: "hidden",
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.3s ease-in-out",
    },
    // При наведении картинка поднимается вверх
    "&:hover img": {
        transform: "translateY(-15px)",
    },
}));

// Стили для заголовка статьи
export const TitleStyled = styled(Typography)(() => ({
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff", // Белый цвет текста
    marginBottom: "8px",
}));

// Стили для типа статьи
export const TypeStyled = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: theme.palette.primary.main,
}));

// Стили для кнопки перехода
export const ButtonStyled = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#f0d43a" : "#042c54",
    color: "#fff",
    width: "300px",
    height: "70px",
    textAlign: "center",
    borderRadius: "4px",
    textDecoration: "none",
    alignSelf: "flex-end",
    display: "flex", // Flexbox для центрирования
    justifyContent: "center", // Центрирование по горизонтали
    alignItems: "center",
    "&:hover": {
        backgroundColor:
            theme.palette.mode === "dark"
                ? theme.palette.secondary.dark
                : theme.palette.primary.dark,
    },
}));
