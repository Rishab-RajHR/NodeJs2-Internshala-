// console.log('hello');
console.log(process);
for(let x=0; x<5; x++){
    console.log(x);
    if(x==3){
        process.exit();
    }
}
