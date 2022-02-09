import isValidate from './Validate.js'

function TodoList({ $target, state, toggleTodo, removeTodo }) {
  isValidate(state)
  this.state = state
  const $todoList = document.createElement('ul')

  $target.appendChild($todoList)
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!')
  }

  this.render = function () {
    const html = `
      ${this.state
        .map(
          ({ text, isCompleted }, index) =>
            `<li data-index=${index}>${
              isCompleted ? `<s>${text}</s>` : text
            }<button>x</button></li>`
        )
        .join('')}
    `
    $todoList.innerHTML = html
  }

  this.setState = function (nextState) {
    this.state = nextState
    this.render()
  }

  $todoList.addEventListener('click', (e) => {
    const $li = e.target.closest('li')
    const index = Number($li.dataset.index)
    console.log(index)
    if (e.target.tagName === 'LI' || e.target.tagName === 'S') {
      toggleTodo(index)
    } else if (e.target.tagName === 'BUTTON') {
      removeTodo(index)
    }
  })
  this.render()
}

export default TodoList
