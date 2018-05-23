import React, { Component } from 'react';
import Header from './Header'
import MainSection from './MainSection'

const initialState = [
  {
    text: 'React ES6 TodoMVC',
    complete: false,
    id: 0
  }
]
const todos =[
  {
    id: this.state.todos.reduce((maxID, todo) => Math.max(todo.id,maxID),-1) + 1,
    completed: false,
    text : text
  }
  ...this.state.todos
]
this.setState({todos})


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: initialState,
      gameID= null,
      player: 0
    }
  }
  render() {
    return (
      <div >
        <Header
        onSave={this.onSave.bind(this)}
        />
        <MainSection todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
