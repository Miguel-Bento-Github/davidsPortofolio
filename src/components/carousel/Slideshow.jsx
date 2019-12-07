import React, { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Slideshow() {
  return (
    <Fragment>
      <Carousel>
        <div className="carousel-container">
          <img
            alt="netherlands"
            className="carousel-img"
            src="https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
        <div className="carousel-container">
          <img
            alt="netherlands"
            className="carousel-img"
            src="https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
        <div className="carousel-container">
          <img
            alt="netherlands"
            className="carousel-img"
            src="https://images.pexels.com/photos/794/sea-houses-cloudy-buildings.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
      </Carousel>
    </Fragment>
  );
}
