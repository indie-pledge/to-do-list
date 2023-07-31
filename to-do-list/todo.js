function addTodo() {
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  const newTodo = document.createElement('li');
  newTodo.innerText = input.value;

  list.appendChild(newTodo);
  input.value = '';
}
