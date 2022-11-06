import React from "react";
import PropTypes from "prop-types";
import "./BlockTitle.css";
import { FormattedMessage } from "react-intl";

const BlockTitle = ({ translationID, title }) => (
  <div className="dz__features-container__feature">
    <div className="dz__features-container__feature-title">
      <div />
      <h1>
        <FormattedMessage
          id={`${translationID}.text`}
          defaultMessage="{blockTitle}"
          description="Block title"
          values={{
            blockTitle: title,
          }}
        />
      </h1>
    </div>
  </div>
);

BlockTitle.propTypes = {
  translationID: PropTypes.string,
  title: PropTypes.string,
};
export default BlockTitle;
