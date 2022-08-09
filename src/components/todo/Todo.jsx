import React, { Component } from "react";
import "./Todo.css";
export class Todo extends Component {
  state = {
    input: "",
    items: [],
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
    alert("dddddd")
  }
  deleteItem = (index) => {
    window.confirm("Do you want to delete the task?")
    const allItems = this.state.items;
    allItems.splice(index,1)
    this.setState({
      items: allItems,
    })
  };
  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div>
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
        <div className="editdiv">
            <form>
              <input type="text" />
              <button type="button" className="btn" >Edit</button>
            </form>
        </div>
      </div>
    );
  }

}
export default Todo;
