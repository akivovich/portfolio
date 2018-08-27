import('sql');

let method = (url) =>  {
    return new Promise((resolve, reject) => {
        //if (url < 15)
            resolve(url+"_OK");
        //else
        //    reject(new Error("Out of order"));
    });
}

let urls = [1,2,3,4,5,6,7,8,9,0];
let results = [];
/*
let chain = Promise.resolve();
urls.forEach(url => {
    chain = chain
            .then(() => {
                //console.log('Call method', url);
                return method(url);
            })
            .then(result => {
                //console.log('Got result', result);
                results.push(result);
            })
            .catch((err) => {
                console.log(err);
            })
});
chain
    .then(() => console.log('results', results));
*/

Promise.all(urls.map(method))
       .then(result => console.log('result', result))
       .catch(err => console.log('error', err));
