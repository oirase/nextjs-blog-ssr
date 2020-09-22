
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
/*
const mockCallBack = jest.fn(x => 42 + x)
forEach([0, 1], mockCallBack)

//expect(mockCallBack.mock.calls.length).toBe(2)
test('first run in first arg is 0', () => {
  expect(mockCallBack.mock.calls[0][0]).toBe(0)
})
*/
function increment(x) {
  return 2
}

test('increment', () => {
  expect(increment(1)).toBe(2)
})

function func1(x, callback) {
  callback(x)
}

const mockCallBack = jest.fn(x => x + 10)
func1(20, mockCallBack)
test('func1 first args is 20', () => {
  expect(mockCallBack.mock.calls[0][0]).toBe(20)
})
