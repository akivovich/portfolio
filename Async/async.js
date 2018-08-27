/*
let p = new Promise((resolve, reject) => {
    //throw new Error('error')
    //resolve('12345');
    reject('2222');
});

//p.then((res) => console.log('Result', res));
p.then(
    (res) => console.log('Result', res), 
    (error) =>  console.log('Rejected', error)
);
p.catch(e => console.log('Catch', e));
*/

/*
  function doubleAfter2Seconds(x) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (x != 0)
            resolve(x * 2);
        else
            reject(new Error('null !!!'));
      }, 2000);
    });
  }
  
  async function addAsync(x) {
    const a = await doubleAfter2Seconds(1);
    console.log('a', a);
    const b = await doubleAfter2Seconds(2);
    console.log('b', b);
    const c = await doubleAfter2Seconds(3);
    console.log('c', c);
    if (!x)
        throw new Error('000');
    return x + a + b + c;
  }
  
  
  addAsync(0)
    .then((sum) => {
        console.log(sum);
    })
    .catch((err) => {
        console.log('Error', err);
    });

  console.log('end');
*/


