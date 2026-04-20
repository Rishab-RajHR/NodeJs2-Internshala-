// IIFE => Immediately invoked function

(()=>{
   console.log("Test");
})()


let counter = 100;
function loop(val){
    console.log(val);
    if(val<88){
        return
    }
    const temp = val - 1;
    loop(temp);
}

loop(counter);


// Another way
function loop2(val){
    console.log(val);
    if(val > 0){
       val = val-1;
       return loop2(val);
    }
    return 'end';
}

const looper = loop2(25);
console.log(looper);