const arr = [1,2,3,4,5];
console.clear();


function aFun(myArr,callback){
   myArr.forEach((el)=>{
      setTimeout(callback,1000,el);
   })
   myArr.forEach((el)=>{
      setTimeout(callback,0,`${el} -`);
   })
}

aFun(arr,(val)=>{
    console.log(val);
    console.log('async');
})

console.log('test');

arr.forEach((el)=>{
   console.log(el);
   console.log('Sync');
})