import {observable, action} from 'mobx'
import todoStore from '../stores/TodoStore'

export default class TodoModel {
    store;
    id;
    @observable title;
    @observable completed;

    constructor(store, title, completed, id) {
        this.title = title;
        this.completed = completed;
        this.id = id;
        this.store = store;
    }

    @action
    toggle() {
        this.completed = !this.completed;
        if (this.completed === true) {
            todoStore.addCompleted(this.id);
        } else {
            todoStore.removeCompleted(this.id);
        }
    }

    @action
    delete() {
        todoStore.todos.remove(this);
        todoStore.completed.remove(this);
        todoStore.left.remove(this);
    }
}

