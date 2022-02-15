import React, { Component } from 'react'
import './_index.css'

export class ItemCard extends Component {
  render() {

    const {name, id, handleDeleteItem} = this.props;

    return (
      <div className='card'>
          {name}
          <span onClick={() => handleDeleteItem(id)} name="card" className='cross'>&#10060;</span>
      </div>
    )
  }
}

export default ItemCard