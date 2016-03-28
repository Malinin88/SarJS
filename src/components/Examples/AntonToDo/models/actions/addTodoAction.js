import { BaseAction } from './BaseAction';

export class AddTodoAction extends BaseAction {
    constructor (newTodo) {
        super('ADD_TODO');
        this.newTodo = newTodo;
    }
}