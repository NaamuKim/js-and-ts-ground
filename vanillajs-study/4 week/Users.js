function Users({ $target, onClickOther }) {
  const users = ['naamukim', 'gurum', 'danpoong'];
  const $userDiv = document.createElement('div');
  $target.appendChild($userDiv);

  $userDiv.addEventListener('click', function (e) {
    const username = e.target.closest('li').innerText;
    onClickOther(username);
  });

  this.render = () => {
    const htmlString = users.map((user) => {
      return `<li>${user}</li>`;
    });

    $userDiv.innerHTML = `<ul>${htmlString.join('')}</ul>`;
  };
  this.render();
}

export default Users;
