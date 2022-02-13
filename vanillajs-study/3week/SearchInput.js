function SearchInput({ $target, onSearchGIF }) {
  this.$searchInputDiv = document.createElement('div')
  $target.appendChild(this.$searchInputDiv)

  this.render = () => {
    this.$searchInputDiv.innerHTML = `
    <input type="text" id="search-input">`
  }

  this.$searchInputDiv.addEventListener('keyup', () => {
    let timer
    const $input = this.$searchInputDiv.querySelector('input')
    if (timer) {
      clearTimeout()
    }
    timer = setTimeout(function () {
      if ($input.value) {
        onSearchGIF($input.value)
      }
    }, 1000)
  })
  this.render()
}

export default SearchInput
