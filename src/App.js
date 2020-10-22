import React from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos'

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting',
        completed: false
      }
    ]
  };

  toggleComplete = id => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
