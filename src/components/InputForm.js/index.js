import React, { Component } from 'react'
import './_index.css';

export class InputForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         itemName: "",
      }
    }
    
  handleInputChange = (e) => this.setState({itemName: e.target.value})

  handleOnSubmit = (e) => {

    const {itemName} = this.state;
    const {handleAddItem} = this.props;

      e.preventDefault();

      if(itemName !== ""){
        handleAddItem(itemName);
      }

      this.setState({itemName: ""});
  }

  render() {

    const {itemName} = this.state;

    return (
      <form className='input-form' onSubmit={this.handleOnSubmit}>
          <input type="text" id="item-input" value={itemName} onChange={this.handleInputChange} placeholder="Add item"/>
          <input type="submit" value="Add"/>
      </form>
    )
  }
}

export default InputForm