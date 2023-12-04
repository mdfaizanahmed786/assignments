/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(todos=[]) {
    this.todos = todos;
  }
  add(todo) {
    this.todos.push(todo)
  }
  remove(indexOfTodo) {
    if (indexOfTodo > -1) {
      this.todos.splice(indexOfTodo, 1)
    }
  }

  update(indexOfTodo, updatedTodo) {
    let todosLength = this.todos.length;
    for (let i = 0; i < todosLength; i++) {
      if (indexOfTodo === i) {
        this.todos[i] = updatedTodo;
      }
    }

  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo){
    if(indexOfTodo<-1 || indexOfTodo >=this.todos.length) return null;
    return this.todos[indexOfTodo];
  }

  clear(){
    this.todos=[];
  }

}

module.exports = Todo;
