import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { request } from './ajax.js'
import SearchHistory from './SearchHistory.js'

function App({ $target }) {
  this.$target = $target
  this.state = {
    histories: [],
  }

  const searchHistory = new SearchHistory({
    initialState: this.state,
    $target: this.$target,
    onClickHistory: async (text) => {
      const data = await request(`text=${text}`)
      searchResult.setState(data)
    },
  })

  const searchInput = new SearchInput({
    $target: this.$target,
    onSearchGIF: async (text) => {
      if (text.length > 0) {
        this.setState({
          histories: [...this.state.histories, text],
        })
        const data = await request(`text=${text}`)
        searchResult.setState(data)
      }
    },
  })

  const searchResult = new SearchResult({
    initialState: [],
    $target: this.$target,
  })

  this.setState = (nextState) => {
    this.state = nextState
    searchHistory.setState(this.state)
  }
}

export default App
