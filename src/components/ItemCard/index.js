import React from 'react'
import './_index.css'

export default React.memo(function ItemCard(props) {

  const {name, id, handleDeleteItem} = props;

  return (
    <div className='card'>
        {name}
        <span onClick={() => handleDeleteItem(id)} name="card" className='cross'>&#10060;</span>
    </div>
  )
})
