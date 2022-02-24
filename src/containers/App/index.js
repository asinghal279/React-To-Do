import { findIndex } from 'lodash';
import React, { Component, useEffect, useState } from 'react'
import './_index.css';
import Header from '../../components/Header';
import InputForm from '../../components/InputForm.js/index.js';
import ListRenderer from '../../components/ListRenderer';
import { getAllItems, setItems } from '../../utils/api';

export default function App() {

  const [items, setItemsList] = useState([]);

  useEffect(() => {
    let data = getAllItems();
    data = Array.isArray(data) ? data : JSON.parse(data);
    setItemsList(data);
  }, [])

  const handleAddItem = (value) => {

    const itemsList = [...items];

    const index = findIndex(itemsList, (item) => item.name === value);

    if(index === -1){
      const itemObject = {
        name: value,
        id: Date.now(),
      }

      itemsList.push(itemObject);

      setItemsList(itemsList);

      setItems(itemsList);
    }
  }

  const handleDeleteItem = (itemID) => {
    
    const itemsList = [...items];

    const index = findIndex(items, (item) => item.id === itemID);

    itemsList.splice(index, 1);

    setItemsList(itemsList); 
    
    setItems(itemsList);
  }


  return (
    <div className="App">
      <Header text="To-Do App" />
      <InputForm handleAddItem={handleAddItem}/>
      <ListRenderer items={items} handleDeleteItem={handleDeleteItem}/>
    </div>
  )
}
