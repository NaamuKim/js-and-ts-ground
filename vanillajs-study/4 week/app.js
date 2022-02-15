import TodoList from './TodoList'
import TodoInput from './TodoInput'
import api from './api'

function app({ $target }) {
  this.$target = $target
  const todos = api.getData('naamukim')
  const todoList = new TodoList({ $target, onClick, onRemove })
  const todoInput = new TodoInput()
  this.render = () => {}

  this.addTodo = (text) => {
    api.addData(text)
    this.setState()
  }

  this.toggleTodo = (id) => {
    api.toggleData(id)
  }

  this.setState = () => {
    const nextState = api.getData('naamukim')
    todoList.setState(nextState)
  }
}

export default app
