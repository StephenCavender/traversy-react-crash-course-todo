import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      // {
      //   id: uuidv4(),
      //   title: 'Take out trash',
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: 'Dinner',
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: 'Meeting',
      //   completed: false
      // }
    ]
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState( {todos: res.data }));
  }

  toggleComplete = id => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  deleteTodo = id => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));

    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)]
    // });
  }

  addTodo = title => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      complete: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data]}));

    // const newTodo = {
    //   id: uuidv4(),
    //   title,
    //   completed: false
    // };

    // this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <Router basename="/traversy-react-crash-course-todo">
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  toggleComplete={this.toggleComplete}
                  deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )}/>
            <Route path="/about/" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
