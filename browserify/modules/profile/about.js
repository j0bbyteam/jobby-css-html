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
                {this.showUserImg()}
                <h5>
                    About this provider
                </h5>
                <h3>
                    {this.props.user.username}
                </h3>
                <h4>
                    {this.props.user.job}
                </h4>
                <p>
                    {this.props.user.city}
                </p>
                <p>
                    {this.props.user.personal}
                </p>
                <button>Ask a question</button>
            </div>
        )
    }
});

module.exports = About;
