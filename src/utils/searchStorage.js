import Stack from '../utils/dataStructures/Stack'

export const addToSearchStorage = () => {
  const stack = new Stack(5)
  stack.push(50)
  console.log(stack)
  console.log('jhollaa')
  window.localStorage.setItem('searches', JSON.stringify(stack))
}

export const getSearchStorage = () => {
  // const obj = JSON.parse(window.localStorage.getItem('searches'))
  // const stack = new Stack().fromJson(obj)
  // console.log(stack)
}
