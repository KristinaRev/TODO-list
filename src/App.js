import React from "react";
import Input from "./components/input/index";
import Button from "./components/Button";
import './App.css'
import ListItem from "./components/ListItem";


class App extends React.Component {
  constructor () {
    super();

    this.state = {
      inputValue: '',
      todoList: [],
    }
  }



  onChangeinput = (event) => {
   
    //event.target.value - это то что мы вводим в интпут в браузере
    this.setState ({
      inputValue: event.target.value,
    })
  }

  onRemoveTodo = (todoname) => {
    const {todoList} = this.state;

    const todoIndex =  todoList.findIndex((str)=> str === todoname);
    
    const newTodoList = [...todoList.slice(0, todoIndex),...todoList.slice(todoIndex+1)];
    
    this.setState ({
      todoList: newTodoList,
    });
  }

  onClickBtn = () => {
    const {inputValue, todoList} = this.state;

    this.setState ({
      todoList: [inputValue,...todoList ],
      inputValue: '',
    });
    
  }

  render () {
    const {inputValue, todoList} = this.state; //извлекаем из state

    return (
      <div>

      <div>
         <h1>TODO list</h1>
      </div>

      <div className="control">
      <Input value={inputValue} onChange= {this.onChangeinput}/>
      <Button name="add TODO" 
      onClick={this.onClickBtn}/>
      </div>


      <div className="table">
        
        {todoList.map((todoStr)=>{
          return(
            <ListItem
            key={todoStr}
        todoname={todoStr}
        remove={this.onRemoveTodo}/>
          );
        })}
      </div>
      
      </div>
    );
  }
}

export default App;
