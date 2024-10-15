import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "@mui/material";
import {
    StyledCard,
    TitleTypography,
    ActionButton,
    BackgroundImage,
} from "./RelatedArticle.styles";

function RelatedArticle({ article }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledCard
            className={isHovered ? "hovered" : ""}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Фоновое изображение */}
            <BackgroundImage
                headerImg={article.headerImg}
                className={isHovered ? "hovered" : ""}
            />

            {/* Заголовок статьи */}
            <TitleTypography className="title" variant="h3">
                {article.title}
            </TitleTypography>

            {/* Кнопка для перехода */}
            <ActionButton
                className="button"
                component={Link}
                href={`/article/${article.url}`}
                variant="contained"
            >
                Read more
            </ActionButton>
        </StyledCard>
    );
}

RelatedArticle.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        headerImg: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
};

export default RelatedArticle;
