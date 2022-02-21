import { API_URL } from './config.js';
import { setLoading } from './loading.js';
const myName = 'naamukim';

export const getData = async () => {
  setLoading(true);
  const res = await fetch(`${API_URL}/${myName}`);
  setLoading(false);
  if (res.status >= 400) {
    alert('서버로의 요청이 실패됐습니다.');
  } else {
    return await res.json();
  }
};

export const getOtherData = async (otherName) => {
  setLoading(true);
  const res = await fetch(`${API_URL}/${otherName}`);
  setLoading(false);
  return res.json();
};

export const addData = async (todoText) => {
  setLoading(true);
  const res = await fetch(`${API_URL}/${myName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  });
  res.status >= 400 && alert('서버로의 요청이 실패됐습니다.');
  setLoading(false);
};

export const toggleData = async (data) => {
  const res = await fetch(`https://todo-api.roto.codes/${myName}/${data}/toggle`, {
    method: 'PUT',
  });
  res.status >= 400 && alert('서버로의 요청이 실패됐습니다.');
};

export const removeData = async (data) => {
  setLoading(true);
  const res = await fetch(`https://todo-api.roto.codes/${myName}/${data}`, {
    method: 'DELETE',
  });
  res.status >= 400 && alert('서버로의 요청이 실패됐습니다.');
  setLoading(false);
};
