const newD = new Date();
console.log(newD);

const oldD = new Date(2022, 0, 1,9,30,50);
const oldD1 = new Date(2022, 0, 1);
console.log(oldD1);

const zeroDay = new Date(1000000);  // Jan 1, 1970
console.log(zeroDay);


const isoDate = new Date("1980-01-15");
console.log(isoDate);
zeroDay.setFullYear(2020);

console.log(zeroDay.getTime());
console.log(zeroDay.getFullYear());
console.log(zeroDay.getDay());