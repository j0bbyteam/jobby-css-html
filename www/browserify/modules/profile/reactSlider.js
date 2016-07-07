import React, { Component } from 'react';
import { render } from 'react-dom';
var Slider = require('react-slick');

var ReactSlider = React.createClass({
    propTypes : {
        images: React.PropTypes.array
    },
    render: function() {
        var settings = {
            dots: false,
            arrows: false
        };
        var divStyle = {
            height: '60vw',
            width: '100vw'
        };
        return (
            <div className='container'>
                <Slider {...settings}>
                    <div style={divStyle}>
                        <img style={divStyle} src='http://placekitten.com/g/400/200' />
                    </div>
                    <div style={divStyle}>
                        <img style={divStyle} src='http://images.popmatters.com/news_art/b/best-pop-music-2015.jpg' />
                    </div>
                    <div style={divStyle}>
                        <img style={divStyle} src='http://images.clipartpanda.com/pop-clipart-balloon-pop-hi.png' />
                    </div>
                </Slider>
            </div>
        );
    }
});

module.exports = ReactSlider;
