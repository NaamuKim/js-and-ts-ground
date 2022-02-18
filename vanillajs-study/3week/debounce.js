let timer = null;
function debounce(fn, time) {
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(fn, time);
}

export default debounce;
