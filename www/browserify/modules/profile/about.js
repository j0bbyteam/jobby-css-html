import React, { Component } from 'react';
import { render } from 'react-dom';

const About = React.createClass({
    propTypes : {
        user: React.PropTypes.object
    },
    showUserImg(){
        console.log(this.props.user);
        var imgUrl = 'https://s3.amazonaws.com/com.onebody.profile/Users/' + this.props.user.$id.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/:/g, "%3A") + '/profilepic.jpg';
        return (<img id="profile-img" src={this.props.user.imgLink} />);
    },
    render() {
        return (
            <div id="react-about">
                <figure>
                    {this.showUserImg()}
                </figure>
                <div className="profile-details">
                    <h2> {this.props.user.username} </h2>
                    <p>Here to Care{this.props.user.companyName}</p>
                    <span>Professional Nanny{this.props.user.job}</span>
                    <div className="rating"><i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-o"></i></div>
                    <span>{this.props.user.personal}</span>
                </div>
                <div className="profile-extras">
                    <span className="distance">31km from you</span>
                    <span className="city">Toronto, Ontario{this.props.user.city}</span>
                </div>
                <div className="description">
                    <p>A 4-6 line paragraph talking about Sarah’s experience and accomplishments over the years, preferably in third person A 4-6 line paragraph talking about Sarah’s experience and accomplishments over the years, preferably in third person</p>
                    <a href="javascript:void(0)" title="Show More">Show More</a>
                </div>
                <div className="ask"><a href=""><i className="ion-chatbubbles"></i>Ask a question</a></div>
                <div className="social-links">
                    <p>Learn more about Sarah</p>
                    <ul>

                        <li><a href=""><i className="ion-social-twitter"></i></a></li>
                        <li><a href=""><i className="ion-social-facebook"></i></a></li>
                        <li><a href=""><i className="ion-social-googleplus"></i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = About;
