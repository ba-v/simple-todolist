import React, {Component} from 'react'
import TodoItem from './TodoItem'
import todoStore from '../stores/TodoStore'
import {observer} from 'mobx-react'

@observer
class TodoItems extends Component {
    render() {
        return (
            <div>
                <section className="main">
                    {
                        todoStore.showType === 0 &&
                        <ul className="todo-list">
                            {
                                todoStore.todos.map(todo => {
                                    return (
                                        <TodoItem todo={todo}/>
                                    )
                                })
                            }
                        </ul>
                    }
                    {
                        todoStore.showType === 1 &&
                        <ul className="todo-list">
                            {
                                todoStore.left.map(todo => {
                                    return (
                                        <TodoItem todo={todo}/>
                                    )
                                })
                            }
                        </ul>
                    }
                    {
                        todoStore.showType === 2 &&
                        <ul className="todo-list">
                            {
                                todoStore.completed.map(todo => {
                                    return (
                                        <TodoItem todo={todo}/>
                                    )
                                })
                            }
                        </ul>
                    }
                </section>
            </div>
        )
    }
}

export default TodoItems;