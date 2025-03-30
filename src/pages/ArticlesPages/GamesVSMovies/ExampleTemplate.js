import PropTypes from "prop-types";

import { TitleStyled, DescriptionStyled } from "./ExampleTemplate.styles";

function ExampleTemplate({ title, description, rating }) {
    return (
        <>
            <TitleStyled>{title}</TitleStyled>
            <DescriptionStyled>{description}</DescriptionStyled>
            <div>
                <p>
                    ⭐ <i>{rating}</i>
                </p>
            </div>
        </>
    );
}

ExampleTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
};

export default ExampleTemplate;
