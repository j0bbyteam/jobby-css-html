import React, { Component } from 'react';
import { render } from 'react-dom';

const Description = React.createClass({
    propTypes: {
        user: React.PropTypes.object,
        reviews: React.PropTypes.array,
        services: React.PropTypes.array
    },
    render() {
        return(
            this.props.reviews.map(function(review){
                return review
            })
        )
    }
});