console.log(__dirname);
console.log(__filename);


console.log(process.argv);
console.log(process.argv[0]);

const first = process.argv[2];
const second = process.argv[3];

let message = `${first} ${second}`;
console.log(message);