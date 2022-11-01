import React from 'react';
import './BlockTitle.css';

const BlockTitle = (props) => (
    <div className="dz__features-container__feature">
    <div className="dz__features-container__feature-title">
      <div />
      <h1>{props.title}</h1>
    </div>
  </div>
);

export default BlockTitle;