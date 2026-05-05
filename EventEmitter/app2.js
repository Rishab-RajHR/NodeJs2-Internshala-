const events = require('events');
const eEmitter = new events.EventEmitter();
let counter = 1;

const getParty = function (){
  counter++;
    console.log('Time to Party');
    const ran = Math.ceil(Math.random()*3);
    console.log(`Party starts in ${ran}`);
    tester(ran);
}

eEmitter.on('music',getParty);

tester(2);

function tester(val){
   if(counter<5){
   setTimeout((e)=>{
      eEmitter.emit('music');
   },val*1000);
  }
}