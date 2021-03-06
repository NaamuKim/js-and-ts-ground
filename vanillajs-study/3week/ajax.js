import { END_POINT } from './config.js';

export const request = (url) => {
  return fetch(`${END_POINT}?${url}`)
    .then((res) => {
      if (res.json().status !== 200) {
        alert('요청이나 응답을 확인해주세요!');
      } else {
        return res.json();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
