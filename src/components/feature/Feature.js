import React from 'react';
import PropTypes from 'prop-types';
import './Feature.css';

const Feature= ({title, text}) => (
    <div className="dz__features-container__feature">
    <div className="dz__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="dz__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

Feature.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default Feature;