function isValidate(state) {
  if (!state || !Array.isArray(state)) {
    throw new Error('데이터의 형식이 올바르지 않습니다.')
  }
  state.forEach((todo) => {
    if (!todo.hasOwnProperty('text') || !todo.hasOwnProperty('isCompleted')) {
      throw new Error('데이터는 할일과 완료 여부가 포함돼야합니다!')
    }
  })

  state.forEach(({ text, isCompleted }) => {
    if (typeof text !== 'string') {
      throw new Error('todo가 문자열이 아닙니다!')
    }
    if (typeof isCompleted !== 'boolean') {
      throw new Error('isCompleted를 다시 확인해 주세요')
    }
  })
}

export default isValidate
