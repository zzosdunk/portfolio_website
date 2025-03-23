import PropTypes from "prop-types";
import { LearnButton } from "./LearnMoreButton.styles";

function LearnMoreButton({ link }) {
    return (
        <LearnButton variant="contained" href={`/project/${link}`}>
            Learn More
        </LearnButton>
    );
}

LearnMoreButton.propTypes = {
    link: PropTypes.string.isRequired,
};

export default LearnMoreButton;
