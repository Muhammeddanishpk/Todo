import React, { Component } from "react";
import "./Todo.css";
import Waves from "./waves"
export class Todo extends Component {
  state = {
    input: "",
    items: [],
    edit:false

  };
  handleChange = (event) => {
    const { input } = this.state;
    this.setState({
      input: event.target.value,
    });
    console.log(this.state.input);
  };
  storeItem = (event) => {
    event.preventDefault();
    const { input } = this.state;
    if(input.length !== 0){
      this.setState({
      items: [...this.state.items, input],
      input: "",
    });
    }
    
  };
  editItem = (event) => {

    this.setState({
      edit:true
    })
  }
  handleChangeItem = (event) =>{
    event.preventDefault();
    const { items } = this.state;

    this.setState({...items, text:event.target.value});
    console.log(items);
  }
  cancel = () =>{
    this.setState({
      edit:false
    })
  }

  deleteItem = (index) => {
    if( window.confirm("Do you want to delete the task?")){
         const allItems = this.state.items;
    allItems.splice(index,1)
    this.setState({
      items: allItems,
    })
    }
   
  };
  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div>
          <Waves/>
                <div className={`${this.state.edit ? 'editdiv' : 'hide'}`}>
            <form onSubmit={this.handleChangeItem}>
            <label for="fname"></label>
              <input onChange={this.handleChange} value={items.text} placeholder="Edit Item" type="text" />
              <div className="btns"><span></span>
              <span>
              <button onClick={this.cancel} type="button" className="btn">Cancel</button>
                <button onClick={this.handleEdit} type="button" className="btn">Edit</button>
              </span>
              </div>
              
            </form>
        </div>
      <div className="todo-container">
        <h1>Todo</h1>
        <form className="input-section" onSubmit={this.storeItem}>
          <input
            onChange={this.handleChange}
            value={input}
            type="text"
            placeholder="Enter Items....."
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}{" "}
              <span>
              <i onClick={()=>this.editItem(index)} class="fa-solid fa-square-pen"></i>
              <i
                onClick={() => this.deleteItem(index)}
                className="fa-solid fa-trash-can d"
              ></i>
              </span>
            </li>
          ))}
        </ul>

        
      </div>

      </div>
    );
  }

}
export default Todo;
