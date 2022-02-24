import React, { useState } from 'react'
import './_index.css';

export default function InputForm(props) {

  const [itemName, setItemName] = useState("");

  const handleInputChange = (e) => setItemName( e.target.value )

  const handleOnSubmit = (e) => {
    
    e.preventDefault();

    const { handleAddItem } = props;

    if(itemName !== ""){
      handleAddItem(itemName);
    }

    setItemName("");
  }

  return (
    <form className='input-form' onSubmit={handleOnSubmit}>
        <input type="text" id="item-input" value={itemName} onChange={handleInputChange} placeholder="Add item"/>
        <input type="submit" value="Add"/>
    </form>
  )
}
