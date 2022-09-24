import Router from './Router.js';

document.getElementById('route-nav').addEventListener('click', (e) => {
  const target = e.target.closest('a');
  if (!(target instanceof HTMLAnchorElement)) return;
  e.preventDefault();
});
