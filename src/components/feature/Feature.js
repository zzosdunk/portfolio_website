import React from 'react';
import './Feature.css';

const Feature= (props) => (
    <div className="dz__features-container__feature">
    <div className="dz__features-container__feature-title">
      <div />
      <h1>{props.title}</h1>
    </div>
    <div className="dz__features-container_feature-text">
      <p>{props.text}</p>
    </div>
  </div>
);

export default Feature;