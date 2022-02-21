function TodoList({ $target, initialState, onClick, onRemove }) {
  let data = initialState;
  const $todoListDiv = document.createElement('div');
  $target.appendChild($todoListDiv);

  $todoListDiv.addEventListener('click', function (e) {
    const id = e.target.closest('li').dataset.id;

    if (e.target.className === 'remove-button') {
      e.stopPropagation();
      onRemove(id);
    } else {
      onClick(id);
    }
  });

  this.setState = function (nextData) {
    data = nextData;
    this.render();
  };

  this.render = function () {
    data
      ? ($todoListDiv.innerHTML = `<ul>${data
          .map(function (todo) {
            const contentHTML = todo.isCompleted ? `<s>${todo.content}</s>` : `${todo.content}`;
            return `<li data-id="${todo._id}">${contentHTML} <button class="remove-button">Remove</button></li>`;
          })
          .join('')}</ul>`)
      : ($todoListDiv.innerHTML = 'NO DATA');
  };

  this.render();
}

export default TodoList;
