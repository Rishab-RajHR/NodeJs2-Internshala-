let ready = true;

const checker = new Promise((resolve,reject)=>{
    if(ready){
        const markReady = 'This is the result';
        resolve(markReady);
    }else{
       const markNot = 'Still working on it.';
       reject(markNot);
    }
})

console.log(checker);