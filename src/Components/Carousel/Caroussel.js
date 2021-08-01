import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import Ecm from'./Sources/EcmVideo.mp4';
import './Carousel.css';
import {ProjectsData} from './ProjectsData';




const Caroussel = () => {
  return (
    <div className="Container_Projects">
          
          <ReactCardCarousel autoplay={false} autoplay_speed={2500} className="Cards">
            {ProjectsData.map(slide =>{
              return <div key={slide} className="Card_Projects"><h3 className="ProjectTitle">{slide.title}</h3>
              {slide.value=="image"?<img className="ProjectImg" src={slide.image} />:<video src={slide.image} autoPlay={true} loop muted/>}
              </div>
              
            }
            )}
            
          </ReactCardCarousel>
        </div>
  )
}

export default Caroussel
