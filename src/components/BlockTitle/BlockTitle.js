import React from 'react';
import PropTypes from 'prop-types';
import './BlockTitle.css';

const BlockTitle = ({title}) => (
    <div className="dz__features-container__feature">
    <div className="dz__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
  </div>
);

BlockTitle.propTypes = {
  title: PropTypes.string
} 
export default BlockTitle;