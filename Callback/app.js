function adder(a,b){
   console.log('adder');
   return a + b;
}

function doubler(a,b){
   console.log('doubler');
   return adder(a,b) * 2;
}

function output(a,b){
    console.log(a,b);
    const dub = double(a,b);
    console.log(dub);
}