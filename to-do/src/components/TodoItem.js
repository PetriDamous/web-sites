// CSS
import '../css/Todo.css';

function mouseOver(e) {
    console.log(e.target.style)
    e.target.style.color = 'pink'
}

function TodoItem({item}) {
    return(
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={item.completed}
                onChange={() => console.log('change')}
            />
            <p onMouseOver={mouseOver}>{item.text}</p>
        </div>
    )
}

export default TodoItem;