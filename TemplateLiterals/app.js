const a = `Hello`;
const b = `World`;

function add(x,y){
    return x + y;
}

const val = `
 ${a} ${b} ${5+5} ${add(10,50)}
 single quotes '
 double quotes "
 New \n Line

`;
console.log(val);