const myObj4 = {
    val : 100,
    val1 : true,
    val2 : 'String',
    val3 : {
       first : 'Tillu',
       last : 'Singh'
    },
    fullName : function(){
        return this.val3.first + ' ' + this.val3.last
    }
}

// console.log(myObj4.val3.first + ' ' + myObj4.val3.last);