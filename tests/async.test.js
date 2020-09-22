
function a1 () {
  return new Promise(function(callback){
    setTimeout(function(){
      console.log('a1')
      callback(100 * 2)
    }, 1000)
  })
}

test('async a1', ()=> {
  return a1().then((data) => {
    console.log('resolve', data)
    expect(data).toBe(200)
  })
})

test('resolves a1', () => {
  return expect(a1()).resolves.toBe(200)
})

test('async await a1', async () => {
  const data = await a1();
  expect(data).toBe(200);
});
/*
test('the fetch fails with an error', async () => {
  await expect(a1()).rejects.toThrow('error');
});
*/
