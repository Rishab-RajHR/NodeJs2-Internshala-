// console.log(global);

console.log('first');

setImmediate((val)=>{
   console.log(`Immediate ${val}`);
},'Hello World');

console.log('last');

for(let i=0; i<10; i++){
    console.log(i);;
}