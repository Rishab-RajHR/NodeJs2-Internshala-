const events = require('events');
const eEmitter = new events.EventEmitter();

const getParty = function (){
    console.log('Time to Party');
    const ran = Math.ceil(Math.random()*3);
    console.log(`Party starts in ${ran}`);
    tester(ran);
}

eEmitter.on('music',getParty);

tester(2);

function tester(val){
   setTimeout((e)=>{
      eEmitter.emit('music');
   },val*1000);

}