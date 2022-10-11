import Router from './Router.js';

document.getElementById('route-nav').addEventListener('click', (e) => {
  const target = e.target.closest('a');
  if (!(target instanceof HTMLAnchorElement)) return;
  e.preventDefault();
});

const $app = document.getElementById('app');

const routes = [
  [
    '/',
    () => {
      new Main($app);
    },
  ],
  [
    '/mypage',
    () => {
      new MyPage($app);
    },
  ],
];
