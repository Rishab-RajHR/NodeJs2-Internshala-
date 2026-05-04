let ready = true;

const checker = new Promise((resolve,reject)=>{
  console.log(ready);
    if(ready){
        const markReady = 'This is the result';
        resolve(markReady);
    }else{
       const markNot = 'Still working on it.';
       reject(markNot);
    }
})

console.log(checker);
ready = false;
console.log(checker);


const check1 = () => {
   checker.then(val=>{
       console.log(val);
   })
   .catch(err => {
      console.log(err);
   })
}
check1();