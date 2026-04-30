let counter = 0;

async function hello(mes){
    console.log(mes);
    counter++;
    return mes + counter;
}

hello().then((val)=>{
   console.log(val);
})