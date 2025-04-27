import PropTypes from "prop-types";
import {
    ArticleStyled,
    ImageBlurOverlayStyled,
    ContentStyled,
    TitleStyled,
    TypeStyled,
    TextColumn,
    ButtonColumn,
} from "./ArticleCard.styles";

import LearnMoreButton from "../Buttons/LearnMoreButton";

function ArticleCard({ article }) {
    return (
        <ArticleStyled headerImg={article.headerImg}>
            {/* Размытый слой поверх изображения */}
            <ImageBlurOverlayStyled />

            {/* Контент внутри карточки */}
            <ContentStyled>
                <TextColumn>
                    <TitleStyled>{article.title}</TitleStyled>
                    <TypeStyled>{article.type}</TypeStyled>
                </TextColumn>
                <ButtonColumn>
                    <LearnMoreButton link={`/article/${article.url}`}>
                        Read more
                    </LearnMoreButton>
                </ButtonColumn>
            </ContentStyled>
        </ArticleStyled>
    );
}

ArticleCard.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        headerImg: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired, // article объект обязателен для передачи
};

export default ArticleCard;
