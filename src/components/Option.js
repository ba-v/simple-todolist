import React, {Component} from 'react'
import {observer} from 'mobx-react'
import todoStore from '../stores/TodoStore'


@observer
class Option extends Component {


    render() {
        return (
            <div>
                {
                    todoStore.todos.length > 0 &&
                    <div className="footer">
                        <div className="todo-count">
                            {todoStore.left.length} left
                        </div>
                        <ul className="filters">
                            <li>
                                <a onClick={() => todoStore.showType = 0}>
                                    All
                                </a>
                            </li>
                            <li>
                                <a onClick={() => todoStore.showType = 1}>
                                    Left
                                </a>
                            </li>
                            <li>
                                <a onClick={() => todoStore.showType = 2}>
                                    Done
                                </a>
                            </li>
                        </ul>
                        {
                            todoStore.completed.length > 0 &&
                            <div className="clear-completed"
                                 onClick={() => todoStore.clearall()}
                            >
                                clear done
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Option;
