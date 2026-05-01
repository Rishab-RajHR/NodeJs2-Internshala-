const arr = [1,2,3,4,5];
let counter = 0;
function aFun(myArr,callback){
   myArr.forEach((el)=>{
      setTimeout(callback,1000,el);
   })
   myArr.forEach((el)=>{
      setTimeout(callback,0,`${el}-`);
   })
}

aFun(arr,(val)=>{
    counter++;
    console.log(counter+' '+val);
})
counter++;
console.log(counter+'. '+'test');