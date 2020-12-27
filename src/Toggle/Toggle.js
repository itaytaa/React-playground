import React, { Component } from 'react';

export default class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShown: false
        }
    }
Î
    toggle() {
        this.setState(
            {
                isShown: !this.state.isShown
            }
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.toggle.bind(this)}>click me </button>
                {this.state.isShown && <p>text text text</p>}
            </div>
        );
    }
}
