////// Exercise 1 : is_blank

// let string = prompt("?")
// if(string == ""){
//   console.log("Empty");
// }
// else{
//   console.log("Not empty");
// }


////////Exercise 2 : Abbrev_name

//i slightly cheated on this one, i initially dedfined a variable with my name and it did not work, later online i saw that i can use console log to call the function and just write the name there with out needing to define it first.

// abbrev_name = function (str1) {
//   var split_names = str1.trim().split(" ");
//   if (split_names.length > 1) {
//       return (split_names[0] + " " + split_names[1].charAt(0) + ".");
//   }
//   return split_names[0];
// };
// console.log(abbrev_name("Shachaf Baranes"));




///////Exercise 3 : SwapCase

///// still not sure why i had to define "UPPER" and "LOWER" here but i didint need to define the name in the previuous excercise. i ended up looking it online, it works but i dont udnerstnad the code 100%

var str = prompt('Type something ');
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));