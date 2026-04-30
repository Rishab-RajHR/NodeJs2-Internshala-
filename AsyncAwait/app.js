let counter = 0;

async function hello(mes){
    console.log(mes);
    counter++;
    setTimeout(() => {
         return mes + counter;
    }, 2000);
}

function output(mes){
    counter++;
    console.log(`${mes} ${counter}`)
}

hello('Hello World').then((val)=>{
   console.log(val);
})