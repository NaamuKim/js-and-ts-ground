import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import storage from './storage.js'

const TODOS_STORAGE_KEY = 'todos'

function App({ $target }) {
  this.$target = $target

  this.state = storage.getItem(TODOS_STORAGE_KEY, [])

  const todoInput = new TodoInput({
    $target: this.$target,
    addTodo: (text) => {
      this.setState([
        ...this.state,
        {
          text,
          isCompleted: false,
        },
      ])
    },
  })

  window.addEventListener('removeAll', () => {
    this.setState([])
  })

  const todoList = new TodoList({
    $target: this.$target,
    state: this.state,
    toggleTodo: (index) => {
      const nextState = [...this.state]
      nextState[index].isCompleted = !nextState[index].isCompleted
      this.setState(nextState)
    },
    removeTodo: (index) => {
      const nextState = this.state.filter((_, i) => i !== index)
      this.setState(nextState)
    },
  })

  const todoCnt = new TodoCount({
    $target: this.$target,
    initialState: {
      totalCnt: this.state.length,
      completedCnt: this.state.filter((todo) => todo.isCompleted).length,
    },
  })

  this.setState = function (nextState) {
    this.state = nextState
    storage.setItem(TODOS_STORAGE_KEY, nextState)
    todoList.setState(nextState)

    todoCnt.setState({
      totalCnt: nextState.length,
      completedCnt: nextState.filter((todo) => todo.isCompleted).length,
    })
  }
}

export default App
