import { END_POINT } from './config.js'

export const request = (url) => {
  return fetch(`${END_POINT}?${url}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err)
    })
}
