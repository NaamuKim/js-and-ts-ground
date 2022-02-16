function TodoInput({ $target, onAddTodo }) {
  this.$todoInput = document.createElement('div')
  $target.appendChild(this.$todoInput)

  this.render = () => {
    this.$todoInput.innerHTML = `
    <form>
      <input type="text" placeholder="할 일을 추가하세요!"/><button>입력</button>
    </form>`
  }

  this.$todoInput.addEventListener('submit', (e) => {
    e.preventDefault()
    const $input = this.$todoInput.querySelector('input')
    console.log($input)
    onAddTodo($input.value)
    $input.value = ''
  })

  this.render()
}

export default TodoInput
