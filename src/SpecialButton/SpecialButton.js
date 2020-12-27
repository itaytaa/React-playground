import React, { Component } from 'react';

export default class SpecialButton extends Component {
    handleClick(){
        console.log('he')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}
