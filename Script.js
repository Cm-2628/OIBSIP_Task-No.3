// Retrieve HTML elements
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Store todos
let todos = [];

// Add a new todo
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const todo = {
      text: todoText,
      completed: false
    };
    todos.push(todo);
    renderTodos();
    todoInput.value = '';
  }
}

// Toggle todo completion
function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

// Delete a todo
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// Render todos on the page
function renderTodos() {
  todoList.innerHTML = '';

  if (todos.length === 0) {
    const listItem = document.createElement('li');
    listItem.textContent = 'No todos.';
    todoList.appendChild(listItem);
  } else {
    todos.forEach((todo, index) => {
      const listItem = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.addEventListener('change', () => toggleCompleted(index));
      listItem.appendChild(checkbox);

      const label = document.createElement('label');
      label.textContent = todo.text;
      if (todo.completed) {
        listItem.classList.add('completed');
      }
      listItem.appendChild(label);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteTodo(index));
      listItem.appendChild(deleteButton);

      todoList.appendChild(listItem);
    });
  }
}

// Initial rendering
renderTodos();
