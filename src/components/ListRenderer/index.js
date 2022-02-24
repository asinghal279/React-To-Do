import React from 'react'
import ItemCard from '../ItemCard';
import './_index.css';

export default React.memo(function ListRenderer(props) {

  const { items, handleDeleteItem } = props;

  return (
    <div className='container'>
      {Array.isArray(items) && items.length > 0 ?
        items.map((item) => <ItemCard key={item.id} {...item} handleDeleteItem={handleDeleteItem} />)
        : ""
      }
    </div>
  )
})
