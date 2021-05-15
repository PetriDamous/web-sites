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
  }

  render() {
    const {todos} = this.state;

    const todoItems = todos.map(item => <TodoItem key={item.id} item={item}/>)
    return(
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App;