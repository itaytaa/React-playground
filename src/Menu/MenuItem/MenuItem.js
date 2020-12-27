import React, { Component } from 'react';
import './MenuItem.css'
class MenuItem extends Component {
  render() {
    return (
        <li>
           <a href={this.props.route}>
               {this.props.children}
               </a> 
        </li>
    );
  }
}
export default MenuItem