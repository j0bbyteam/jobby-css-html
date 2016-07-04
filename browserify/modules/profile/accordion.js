import Collapse, { Panel } from 'rc-collapse';
import React from 'react';
import ReactDOM from 'react-dom';

function random() {
    return parseInt(Math.random() * 10, 10) + 1;
}

const ReviewAccordion = React.createClass({
    propTypes : {
        services: React.PropTypes.array,
        reviews: React.PropTypes.array
    },
    getInitialState() {
        console.log(this.props);
        let services = this.props.services;
        this.props.reviews.forEach(function(review, index){
            services.forEach(function(service, index){
                if(review.serviceId == service.$id){
                    if(!service.reviews){
                        service.reviews = [];
                    }
                    service.reviews.push(review);
                }
            });
        });
        console.log(services);

        return {
            time: random(),
            accordion: true,
            activeKey: ['4'],
            services: services
        };
    },

    onChange(activeKey) {
        this.setState({
            activeKey,
        });
    },
    getItems() {
        const activeKey = ['5'];

        let services = this.state.services;
        console.log(services);

        const items = [];
        for (let i = 0; i < services.length; i++) {
            let reviews;
            if(services[i].reviews){
                reviews = <ol>
                    {services[i].reviews.map(function(result) {
                        return <li key={result.$id}>
                            <p>{result.username}</p>
                            <p>{result.text}</p>
                        </li>;
                    })}
                </ol>
            }


            items.push(
                <Panel header={services[i].name} key={services[i].$id}>
                    <p>{services[i].description}</p>
                    <div>{reviews}</div>
                </Panel>
            );
        }
        return items;
    },

    render() {
        const accordion = this.state.accordion;
        const btn = accordion ? 'accordion' : 'collapse';
        const activeKey = this.state.activeKey;
        return (
            <div style={{ margin: 80, width: 400 }}>
                <Collapse
                    accordion={accordion}
                    onChange={this.onChange}
                    activeKey={activeKey}
                >
                    {this.getItems()}
                </Collapse>
            </div>
        );
    },
});

module.exports = ReviewAccordion;
// ReactDOM.render(<Test/>, document.getElementById('__react-content'));
