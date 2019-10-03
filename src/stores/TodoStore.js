import {observable, action} from 'mobx'
import TodoModel from './TodoModel'

class TodoStore {
    @observable todos = [];
    @observable completed = [];
    @observable left = [];
    @observable showType = 0;
    @observable lastID = 0;

    @action
    clearall() {
        let end = this.completed.length;
        for (let i = 0; i < end; i++) {
            this.todos.remove(this.completed.pop())
        }
        this.completed = []
    }

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastID));
        this.left.push(this.todos[this.todos.length - 1]);
        this.lastID += 1;
    }

    @action
    removeCompleted(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                this.completed.remove(this.todos[i]);
                this.left.push(this.todos[i]);
                break;
            }
        }
    }

    @action
    addCompleted(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                this.completed.push(this.todos[i]);
                this.left.remove(this.todos[i]);
                break;
            }
        }
    }
}

const store = new TodoStore();
export default store