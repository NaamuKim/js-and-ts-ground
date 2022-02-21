import debounce from './debounce.js';

function SearchInput({ $target, initialState, onSearchGIF }) {
  this.state = initialState;
  this.$searchInput = document.createElement('input');
  this.$searchInput.placeholder = '검색어를 입력하세요';
  $target.appendChild(this.$searchInput);

  this.render = () => {
    this.$searchInput.value = this.state;
  };

  this.setState = (nextState) => {
    if (typeof nextState === 'string' && nextState.length > 0) {
      this.state = nextState;
      this.render;
    }
  };

  this.$searchInput.addEventListener('keyup', (e) => {
    const { value } = e.target;
    if (value.length > 0) {
      debounce(() => onSearchGIF(value), 500);
    }
  });

  this.render();
}

export default SearchInput;
