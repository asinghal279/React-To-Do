import { findIndex } from 'lodash';
import React, { Component } from 'react'
import './_index.css';
import Header from '../../components/Header';
import InputForm from '../../components/InputForm.js/index.js';
import ListRenderer from '../../components/ListRenderer';
import { getAllItems, setItems } from '../../utils/api';



export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items: [],
      }
    }

  componentDidMount () {
    let items = getAllItems();
    items = Array.isArray(items) ? items : JSON.parse(items);
    this.setState({items});
  }
    
  handleAddItem = (value) => {
    const {items} = {...this.state};
    const index = findIndex(items, (item) => item.name === value);

    if(index === -1){
      const itemObject = {
        name: value,
        id: Date.now(),
      }
      items.push(itemObject);
  
      this.setState({items}, () => setItems(items));
    }
  }

  handleDeleteItem = (itemID) => {
    const {items} = {...this.state};

    const index = findIndex(items, (item) => item.id === itemID);

    items.splice(index, 1);

    this.setState({items}, () => setItems(items));
  }


  render() {

    const {items} = this.state;

    return (
      <div className="App">
        <Header text="To-Do App" />
        <InputForm handleAddItem={this.handleAddItem}/>
        <ListRenderer items={items} handleDeleteItem={this.handleDeleteItem}/>
      </div>
    );
  }
}

export default App