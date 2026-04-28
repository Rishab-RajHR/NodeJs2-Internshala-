// console.log(global);

console.log('first');

setImmediate((val)=>{
   console.log(`Immediate ${val}`);
},'Hello World');

console.log('last');

