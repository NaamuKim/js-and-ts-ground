function SearchResult({ initialState, $target }) {
  this.state = initialState;
  const $searchResultDiv = document.createElement('div');
  $target.appendChild($searchResultDiv);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const htmlString = Array.isArray(this.state)
      ? `${this.state.map((d) => `<li><img alt="${d.title}" src="${d.imageUrl}"></li>`).join('')}`
      : '';

    $searchResultDiv.innerHTML = htmlString;
  };
  this.render();
}
export default SearchResult;
