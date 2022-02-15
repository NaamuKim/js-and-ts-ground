import { API_URL } from './config'
function api() {
  this.getData = async (username) => {
    const res = await fetch(`${API_URL}/${username}`)
    return await res.json()
  }

  this.addData = async (data) => {
    const res = await fetch(`${API_URL}/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: todoText,
      }),
    })
  }

  this.toggleData = async (data) => {
    const res = await fetch(`${API_URL}/${username}`)
  }
}

export default api
