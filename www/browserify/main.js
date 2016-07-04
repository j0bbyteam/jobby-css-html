
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactSlider from './modules/profile/reactSlider';
import Description from './modules/profile/description';
import About from "./modules/profile/about";
import ReviewAccordion from "./modules/profile/accordion";

window.renderSlider = function(user, services) {
  render(
      <ReactSlider />,
      document.getElementById('reactSlider')
  );
};

window.renderDescription = function(user, distance,
                                    numOfReviews,
                                    totalRating,
                                    starImgSrc,
                                    emptyStarSrc) {
  render(
      <Description user={user} distance={distance} numOfReviews={numOfReviews} totalRating={totalRating} starImgSrc={starImgSrc} emptyStarSrc={emptyStarSrc} />,
      document.getElementById('description')
  );
};

window.renderAbout = function(user) {
    render(
        <About user={user} />,
        document.getElementById('about')
    );
};

window.renderReview = function(services, reviews) {
    render(
        <ReviewAccordion services={services} reviews={reviews} />,
        document.getElementById('reviews')
    );
};