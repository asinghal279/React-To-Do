import React, { Component } from 'react'
import ItemCard from '../ItemCard';
import './_index.css';

export class ListRenderer extends Component {
  render() {

    const {items, handleDeleteItem} = this.props;

    return (
      <div className='container'>
          {Array.isArray(items) && items.length > 0 ? 
            items.map((item) => <ItemCard key={item.id} {...item} handleDeleteItem={handleDeleteItem} />)
            : ""
          }
      </div>
    )
  }
}

export default ListRenderer