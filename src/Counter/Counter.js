import React, { Component } from 'react';

export default class Counter extends Component {
  
    state = {
        num: 0,
    }
    increase() {
       
        this.setState(
            {
                num: this.state.num + 1
            }
           
        )
        console.log(this.state.num)

    }
    decrease() {
      
        this.setState(
            {
                num: this.state.num - 1
            }

        )
     console.log(this.state.num)

    }
    render() {
        return (
            <div>
                {this.state.num}
                <button onClick={this.increase.bind(this)}>Increase</button>
                <button onClick={this.decrease.bind(this)}>Decrease</button>
            </div>
        );
    }
}
