const myObj4 = {
    val : 100,
    val1 : true,
    val2 : 'String',
    val3 : {
       first : 'Tillu',
       last : 'Singh'
    },
    val4 : {
      first : 'Ram',
      last : 'Singh'
    },
    fullName : function(val5){
        console.log(this);
        console.log(val5);
        return this.val4.first + ' ' + this.val4.last
    }
}

// console.log(myObj4.val3.first + ' ' + myObj4.val3.last);

console.log(myObj4.fullName('test'));