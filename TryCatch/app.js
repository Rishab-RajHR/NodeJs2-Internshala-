function tester(val){
    try {
       if(val == undefined) throw "No Value";
       if(isNaN(val)) throw "Not a Number";
       val = Number(val);
    } catch (err) {
       console.log(`There was an error ${err}`);
    }
}
tester();
tester(100);
tester('Hello');