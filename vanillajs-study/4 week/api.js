import { API_URL } from './config.js'

const myName = 'naamukim'

export const getData = async () => {
  const res = await fetch(`${API_URL}/${myName}`)
  if (res.status !== 200) {
    alert('서버로의 요청이 실패됐습니다.')
  }
  return await res.json()
}

export const getOtherData = async (otherName) => {
  const res = await fetch(`${API_URL}/${otherName}`)
  if (res.status !== 200) {
    alert('서버로의 요청이 실패됐습니다.')
  }
  return await res.json()
}

export const addData = async (todoText) => {
  const res = await fetch(`${API_URL}/${myName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  })
  if (res.status !== 200) {
    alert('서버로의 요청이 실패됐습니다.')
  }
}

export const toggleData = async (data) => {
  const res = await fetch(
    `https://todo-api.roto.codes/${myName}/${data}/toggle`,
    {
      method: 'PUT',
    }
  )
  if (res.status !== 200) {
    alert('서버로의 요청이 실패됐습니다.')
  }
}

export const removeData = async (data) => {
  const res = await fetch(`https://todo-api.roto.codes/${myName}/${data}`, {
    method: 'DELETE',
  })
  if (res.status !== 200) {
    alert('서버로의 요청이 실패됐습니다.')
  }
}
