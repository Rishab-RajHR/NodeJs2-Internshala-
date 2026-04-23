// Switch statement evaluates the expression

const val = 'yes';

switch (val) {
   case 'yes':
      console.log('It was Yes');
      console.log('Test');
      break;
   case 'none':
   case 'zero':
        console.log('Was not Yes or no');
        break;
   case 'no':
      console.log('It was no');
   default:
    console.log("None was Found");
}