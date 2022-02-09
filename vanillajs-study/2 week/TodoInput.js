import { dispatchRemoveAllEvent } from './customEvents.js'

function TodoInput({ $target, addTodo }) {
  this.$todoInputDiv = document.createElement('div')
  this.$removeAllBtn = document.createElement('button')
  this.$removeAllBtn.innerText = 'Remove All'

  $target.appendChild(this.$todoInputDiv)
  $target.appendChild(this.$removeAllBtn)

  this.$todoInputDiv.addEventListener('submit', (e) => {
    e.preventDefault()
    const $input = this.$todoInputDiv.querySelector('input')
    addTodo($input.value)
    $input.value = ''
    $input.focus()
  })

  this.$removeAllBtn.addEventListener('click', () => dispatchRemoveAllEvent())

  this.render = function () {
    this.$todoInputDiv.innerHTML = `
    <form><input type ="text" plaveholder="할 일을 입력해주세요"><button>입력</button></form>
    `
  }
  this.render()
}

export default TodoInput
