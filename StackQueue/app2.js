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
console.clear();
console.log('one');
setTimeout(()=>{
  console.log('five');
},2000)
console.log('two');
setTimeout(()=>{
    console.log('four and a half');
},1000)
console.log('three');
setTimeout(()=>{
   console.log('four');
},0);
console.log('Pre four');