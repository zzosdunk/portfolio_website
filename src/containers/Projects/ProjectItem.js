import React from 'react';
import './ProjectItem.css';
import star from '../../assets/star-leader.png'

const ProjectItem = (props) => (
  <div className="dz__blog-container_article">

  {/* <div className='dz__project-slider'>
    <Slider />
  </div> */}

    <div className="dz__blog-container_article-image">
      <img className='dz__project-container_article-image-cover' src={props.imgUrl} alt="project_image" />
      {props.leaderStatus && <img className='dz__project-status' src={star} alt="project-leader" />}
    </div>
    <div className="dz__blog-container_article-content">
      <div>
        <p className='dz__project-timeperiod'>{props.date}</p>
        <h3>{props.text}</h3>
        <p className='dz__project-description'>{props.description}</p>
      </div>
      
    </div>
  </div>
);

export default ProjectItem;