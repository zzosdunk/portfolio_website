import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { LearnSmallButton } from "./LearnMoreSmallButton.styles";

function LearnMoreSmallButton({ link }) {
    return (
        <LearnSmallButton variant="contained" href={`${link}`}>
            <FormattedMessage
                id="LearnMoreButton.text"
                defaultMessage="Learn more"
                description="Learn more button"
            />
        </LearnSmallButton>
    );
}

LearnMoreSmallButton.propTypes = {
    link: PropTypes.string.isRequired,
};

export default LearnMoreSmallButton;
