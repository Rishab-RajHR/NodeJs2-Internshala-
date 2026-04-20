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