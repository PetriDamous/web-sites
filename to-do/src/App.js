// Modules
import {Component} from 'react';

// Data
import todosData from './data/todoData';

// CSS
import './css/Todo.css';

// Components
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed
              }
          }
          return todo
      })
      return {
          todos: [...updatedTodos]
      }
    });
  }

  render() {
    const {todos} = this.state;

    const todoItems = todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return(
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App;