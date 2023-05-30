import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Typography } from "@mui/material";

import { Feature, Title } from "./BlockTitle.styles";

function BlockTitle({ translationID, title }) {
    return (
        <Feature>
            <Title>
                <div />
                <Typography variant="h1">
                    <FormattedMessage
                        id={`${translationID}.text`}
                        defaultMessage="{blockTitle}"
                        description="Block title"
                        values={{
                            blockTitle: title,
                        }}
                    />
                </Typography>
            </Title>
        </Feature>
    );
}

BlockTitle.propTypes = {
    translationID: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
export default BlockTitle;
