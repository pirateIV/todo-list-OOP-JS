
const nameInput = document.getElementById("floatingInput"),
  addBtn = document.getElementById("addBtn"),
  form = document.getElementById("form"),
  tasksContainer = document.getElementById("tasks-container");

const todos = [{id: 1, todoName: ''}];

class TodoList {
  constructor(id, todoName) {
    this.id = id;
    this.todoName = todoName;
  }

  static displayTodo() {
    tasksContainer.innerHTML = "";
    todos.forEach((todo, index) => {
      tasksContainer.innerHTML += `
      <div class="task bg-warning d-flex justify-content-between align-items-center p-1">
        <div class=" d-flex align-items-center p-1">
          <small class="me-4 text-dark">${todo.id} </small>
          <h5 class="task-name">${todo.todoName}</h5>
        </div>
        <button class="btn btn-danger">Delete</button>
      </div>
    
      `;
    });
  }

  static addTodo() {
    let name = floatingInput.value;
    let id = 1;
    let todo = {name, id}
    todos.push(todo)

    console.log(todos)
    TodoList.displayTodo()
  }
}

TodoList.displayTodo();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  TodoList.displayTodo()
  TodoList.addTodo()
});

// addBtn.addEventListener("click", TodoList.addTodo);
