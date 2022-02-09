function TodoCount({ $target, initialState }) {
  this.$todoCntDiv = document.createElement('div')
  $target.appendChild(this.$todoCntDiv)

  this.state = initialState
  this.render = function () {
    const { totalCnt, completedCnt } = this.state
    this.$todoCntDiv.innerHTML = `<span>총 개수: ${totalCnt}, 완료된 todo 개수: ${completedCnt}</span>`
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render()
}
export default TodoCount
