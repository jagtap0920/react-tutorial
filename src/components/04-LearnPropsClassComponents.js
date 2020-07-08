import React, {Component} from 'react';

class LearnPropsClassComponents extends Component {
    render () {
        return (
            <div>
                <h1>My name is {this.props.name} and I'm from {this.props.country}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default LearnPropsClassComponents;