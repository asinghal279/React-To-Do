import React, { Component } from 'react'
import './__Header.css'

export class Header extends Component {
  render() {
    return (
      <h1 className='heading'>{this.props.text}</h1>
    )
  }
}

export default Header