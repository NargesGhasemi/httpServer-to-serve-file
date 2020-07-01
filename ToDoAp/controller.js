class controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindCompleteeTodo(this.handleCompleteTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindTabLink(this.handleTabLink);

    // Display initial todos
    this.onTodoListChanged(this.model.todos);
  }

  onTodoListChanged = todos => {
    this.view.displayTodos(todos);
  }

  handleAddTodo = todoText => {
    this.model.addTodo(todoText);
  }

  handleEditTodo = (id, todoText) => {
    this.model.editTodo(id, todoText);
  }

  handleDeleteTodo = id => {
    this.model.deleteTodo(id);
  }

  handleCompleteTodo = id => {
    this.model.completeTodo(id);
  }

  handleTabLink = id => {
    this.model.filterTodo(id);
  }
}

