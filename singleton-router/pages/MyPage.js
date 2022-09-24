function MyPage($target) {
  this.render = () => {
    const htmlStr = `<div>MY PAGE</div>`;
    $target.innerHTML = htmlStr;
  };
  this.render();
}
