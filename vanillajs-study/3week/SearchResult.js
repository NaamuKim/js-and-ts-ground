function SearchResult({ initialState, $target }) {
  this.state = initialState
  const $searchResultDiv = document.createElement('div')
  $target.appendChild($searchResultDiv)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const html = this.state
      .map((data) => `<img src="${data.imageUrl}"/>`)
      .join('')
    $searchResultDiv.innerHTML = html
  }
}
export default SearchResult
