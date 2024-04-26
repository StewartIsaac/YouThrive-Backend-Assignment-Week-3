const todoList = document.getElementById('todo-list');
const addItemButton = document.getElementById('add-item');

addItemButton.addEventListener('click', function() {
  const newListItem = document.createElement('li');
  newListItem.textContent = "New Item";
  todoList.appendChild(newListItem);
});

todoList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.style.backgroundColor = "lightblue";
  }
});
