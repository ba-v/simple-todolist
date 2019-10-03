import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class TodoItem extends Component {

    onToggle = () => {
        this.props.todo.toggle()
    };

    deleted = () => {
        this.props.todo.delete()
    };

    render() {
        const {todo} = this.props
        return (
            <li className={todo.completed ? 'completed' : ' '}>
                <div className="view">
                    <input
                        onChange={this.onToggle}
                        type="checkbox" className="toggle" value="on" checked={todo.completed}/>
                    <label>{todo.title}</label>
                    <button className="destroy"
                            onClick={this.deleted}
                    ></button>
                </div>
            </li>
        )
    }
}

export default TodoItem;