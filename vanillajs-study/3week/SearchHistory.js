function SearchHistory({ initialState, $target, onClickHistory }) {
  this.$target = $target
  this.state = initialState
  const $historyDiv = document.createElement('div')
  this.$target.appendChild($historyDiv)

  $historyDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const $button = e.target
      onHistoryClick($button.innerText)
    }
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const html = this.state.histories
      .map((text) => `<button>${text}</button>`)
      .join('')
    $historyDiv.innerHTML = html
  }
}

export default SearchHistory
