const val1 = 'Hello World';
const val2 = 'Test Private 2';
const val3 = 'New Message';

function output(message){
    console.log(`This is your message ${message}.Private values ${val2}`);
}

module.exports.output = output;