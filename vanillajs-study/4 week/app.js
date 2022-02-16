import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import {
  getData,
  getOtherData,
  addData,
  toggleData,
  removeData,
} from './api.js'
import Users from './Users.js'

function app({ $target }) {
  this.$target = $target
  this.state = []

  this.setData = async () => {
    const data = await getData()
    this.setState(data)
  }

  this.setData()

  const todoInput = new TodoInput({
    $target,
    onAddTodo: async (text) => {
      await addData(text)
      const nextState = await getData()
      console.log(nextState)
      this.setState(nextState)
    },
  })

  const todoList = new TodoList({
    $target,
    initialState: this.state,
    onClick: async (id) => {
      await toggleData(id)
      const nextState = await getData()
      this.setState(nextState)
    },
    onRemove: async (id) => {
      await removeData(id)
      const nextState = await getData()
      this.setState(nextState)
    },
  })

  const users = new Users({
    $target,
    onClickOther: async (otherName) => {
      const nextState = await getOtherData(otherName)
      this.setState(nextState)
    },
  })

  this.setState = (nextState) => {
    this.state = nextState
    todoList.setState(this.state)
  }
}

export default app
