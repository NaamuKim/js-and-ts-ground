let res = [];

function response(data) {
  //데이터는 천개 씩 나누어서 처리
  const chunk = data.splice(0, 1000);
  res = res.concat(chunk.map((val) => val * 2));
  if (data.length > 0) {
    setTimeout(() => response(data), 0);
  }
}

ajax('www.naver.com', response);
ajax('www.google..com', response);
