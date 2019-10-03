import React, {Component} from 'react'
import todoStore from '../stores/TodoStore'
import {observer} from 'mobx-react'

@observer
class TodoEntry extends Component {
    state = {
        value: ''
    };

    handleKeyDown = event => {
        // console.log(event.keyCode)
        if (event.keyCode !== 13) {
            return;
        }
        event.preventDefault();
        todoStore.addTodo(this.state.value);
        this.setState({
            value: ''
        });
    };

    render() {
        return (
            <div>
                <header className="header">
                    <h1>
                        todo
                    </h1>
                    <input
                        value={this.state.value}
                        onChange={event => this.setState({value: event.target.value})}
                        onKeyDown={
                            event => this.handleKeyDown(event)
                        }
                        type="text"
                        className="new-todo"
                        placeholder="what needs to be done?"
                    />
                </header>
            </div>
        )
    }
}

export default TodoEntry;