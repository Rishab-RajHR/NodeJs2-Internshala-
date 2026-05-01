const arr = [1,2,3,4,5];
console.clear();
arr.forEach((el)=>{
   console.log(el);
   console.log('Sync');
})

function aFun(myArr,callback){
   myArr.forEach((el)=>{
      setTimeout(callback,1000,el);
   })
}

aFun(arr,(val)=>{
    console.log(val);
    console.log('async');
})

console.log('test');