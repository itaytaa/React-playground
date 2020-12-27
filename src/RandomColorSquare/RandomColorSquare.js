import React, { Component } from 'react';
import './RandomColorSquare.css';
export default class RandomColorSquare extends Component {
    constructor(props) {
        super(props)

        this.state = {
            backgroundColor: "black"
        }

    }
    changeColor() {
        this.setState(
            {
                backgroundColor: '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
            }
        )
    }

    render() {



        return (
            <div className="RandomColorSquare" onClick={this.changeColor.bind(this)} style={{ backgroundColor: (this.state.backgroundColor) }}   >
            </div>
        );
    }
}
