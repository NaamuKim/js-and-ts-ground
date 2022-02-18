import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import { request } from './ajax.js';
import SearchHistory from './SearchHistory.js';

function App({ $target }) {
  this.$target = $target;
  this.state = {
    keyword: '',
    histories: [],
    searchResults: [],
  };

  const searchHistory = new SearchHistory({
    initialState: this.state.histories,
    $target: this.$target,
    onClickHistory: async (keyword) => {
      try {
        const data = await request(`text=${keyword}`);
        this.setState({
          keyword,
          histories: this.state.histories,
          searchResults: data,
        });
      } catch (e) {
        alert(e.message);
      }
    },
  });

  const searchInput = new SearchInput({
    $target: this.$target,
    initialState: this.state.keyword,
    onSearchGIF: async (keyword) => {
      try {
        const data = await request(`text=${keyword}`);

        const nextHistories = [...this.state.histories];

        const historyIndex = nextHistories.findIndex((history) => history === keyword);

        if (historyIndex > -1) {
          nextHistories.splice(historyIndex, 1);
        }
        nextHistories.push(keyword);

        this.setState({
          histories: nextHistories,
          searchResults: data,
        });
      } catch (e) {
        alert(e.message);
      }
    },
  });

  const searchResult = new SearchResult({
    initialState: this.state.searchResults,
    $target: this.$target,
  });

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    searchInput.setState(this.state.keyword);
    searchHistory.setState(this.state.histories);
    searchResult.setState(this.state.searchResults);
  };
}

export default App;
