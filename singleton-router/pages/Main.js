function Main($target) {
  this.render = () => {
    const htmlStr = `<div>MAIN</div>`;
    $target.innerHTML = htmlStr;
  };
  this.render();
}
