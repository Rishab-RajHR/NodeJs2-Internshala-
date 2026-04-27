const myArr = [1,2,3,4,'five','six']
const myObj = {
    first: "Alex",
    last: "Pandian",
    city: "Tanjavur"
}
console.log(myArr.length);

for(let i=0;i<myArr.length;i++){
    console.log(myArr[i]);
}

myArr.forEach((val)=>{
   console.log(val);
})

// for-in loop
for ( key in myObj){
    console.log(key,myObj[key]);
}