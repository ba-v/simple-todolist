import React, {Component} from 'react';
import './App.css';
import {observer} from 'mobx-react'
import TodoEntry from './components/TodoEntry'
import TodoItems from './components/TodoItems'
import Option from './components/Option'

@observer
class App extends Component {
    render() {
        return (
            <div id="todoapp" className="todoapp">
                <TodoEntry/>
                <TodoItems/>
                <Option/>
            </div>
        );
    }
}

export default App;
