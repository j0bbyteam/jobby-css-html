import React, { Component } from 'react';
import { render } from 'react-dom';

const Description = React.createClass({
    propTypes : {
        user: React.PropTypes.object,
        distance: React.PropTypes.number,
        numOfReviews: React.PropTypes.number,
        totalRating: React.PropTypes.number,
        starImgSrc: React.PropTypes.string,
        emptyStarSrc: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            distance: -1,
            numOfReviews: 0,
            totalRating: 0,
            starImgSrc: 'img/professional-profile/blue-star-single.png',
            emptyStarSrc: 'img/professional-profile/white-star-single.png'
        };
    },
    serviceProviderStars(){
        var stars = [];
        stars.push(<img className="profile-review-star" src={this.props.starImgSrc}/>);

        var avgRating = this.props.totalRating / this.props.numOfReviews;

        if(avgRating > 1.4){
            stars.push(<img className="profile-review-star" src={this.props.starImgSrc}/>);
        } else {
            stars.push(<img className="profile-review-star" src={this.props.starImgSrc}/>);
        }
        if(avgRating > 2.4){
            stars.push(<img className="profile-review-star" src={this.props.starImgSrc}/>);
        } else {
            stars.push(<img className="profile-review-star" src={this.props.starImgSrc}/>);
        }
        if(avgRating > 3.4){
            stars.push(<img className="profile-review-star" src={this.props.starImgSrc}/>);
        } else {
            stars.push(<img className="profile-review-star" src={this.props.starImgSrc}/>);
        }
        if(avgRating > 4.4){
            stars.push(<img className="profile-review-star" src={this.props.starImgSrc}/>);
        } else {
            stars.push(<img className="profile-review-star" src={this.props.starImgSrc}/>);
        }
        return stars;
    },
    showDistance(){
        if(this.props.distance || this.props.distance > 0){
            return <span>{this.props.distance.toFixed(1)}km</span>
        } else {
            return <span>Distance unknown</span>
        }
    },
    render() {
        return (
            <div id="react-description">
                <h1> {this.props.user.companyName} </h1>
                <h2>
                    in {this.props.user.profession}
                </h2>
                <p>
                    {this.showDistance()}
                    <span className="profile-reviews-item"> {this.serviceProviderStars()} </span>
                    <span class="profile-reviews-count">{this.props.numOfReviews} Reviews</span>
                </p>
                <p>
                    {this.props.user.info}
                </p>
            </div>
        )

    }
});

module.exports = Description;