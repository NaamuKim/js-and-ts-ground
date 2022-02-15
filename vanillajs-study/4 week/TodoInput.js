function TodoInput({ $target, onAddTodo }) {
  const $todoInput = document.createElement('div')
  $target.appendChild($todoInput)
  this.render = () => {
    $todoInput.innerHTML = `<form onsubmit="onAddTodo"><input type="text" /><button></button></form>`
  }
  this.setState = () => {}
  this.render()
}
export default TodoInput
