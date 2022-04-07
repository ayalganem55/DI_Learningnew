////Excercise 1\\\\
// //Write code to remove “Greg” from the people array.
// let people = ["Greg", "Mary", "Devon", "James"];
// people.shift(0);
// //Write code to replace “James” to “Jason”
// people.splice(2, 1, "Jason");
// //Write code to add your name to the end of the people array.

// //Write code that console.logs Mary’s index
// let mary = people.indexOf("Mary");

// let currMe = "Shachaf"

// people.push(currMe);

// let newPeople = people.slice(0, mary) // new array that starts from the beggining of father array (pos 0 start, up to "mary" position (not included))

// let newPeople2 = people.slice(mary + 1); // the (mary +1) means that it starts from 1 position after mary

// let contactArr= newPeople.concat(newPeople2) // joining the arrays, equal to all of the arrays with out mary

// let mPos = contactArr.indexOf(currMe)

// console.log (contactArr)


////Part ||

//Using a loop, iterate through the people array and console.log each person.

// for (let i = 0; i < newPeople.length; i++) {
//     console.log(newPeople[i]);
//     if (newPeople[i] === "Jason") break;
// }

////Excercise 2\\\\
//Create an array called colors where the value is a list of your five favorite colors.
//Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// let favColor = ["green", "yellow", "blue", "grey", "white"];
// let sentence = ''
// for (let i = 0; i < favColor.length; i++) {
//   console.log(i);
//   let suffix;
//   switch (i) {
//     case 0:
//       suffix = "st";
//       break;
//     case 1:
//       suffix = "nd";
//       break;
//     case 2:
//       suffix = "rd";
//       break;

//     default:
//       suffix = "th";

//       break;
//     }
//     sentence+=`my ${i + 1}${suffix} is ${favColor[i]}`;
// //   console.log(`my ${i + 1}${suffix} is ${favColor[i]}`);
// }

// console.log(sentence);


////Excercise 3\\\\
//While the number is smaller than 10 continue asking the user for a new number.
// let num = prompt("Choose a number")
// while (num < 10 || isNaN(num)) {
//     num =prompt("Choose AGAIN!")
// }
// console.log(num);


////Excercise 4 Building Management\\\\
/// not finished at all --
// let building = {
//     numberOfFloors : 4,
//     numberOfAptByFloor : {
//         "1" : 3,
//         "2" : 4,
//         "3" : 9,
//         "4" : 2,
//     },
//     nameOfTenants : ["sarah", "dan", "david"],
//     numberOfRoomsAndRent:  {
//         "sarah": [3, 990],
//         "dan" :  [4, 1000],
//         "david" : [1, 500],
//     },
// }


////Excercise 5 Family\\\\

    // let dad = {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 50,
    //     eyeColor: "Blue"
    // }

    // for (let I = 0;  I++;) {
    //     console.log(Object.keys(dad))
    //     console.log(Object.values(dad))
    // }


/////Excercise 6\\\\

// let details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// }
  
// for (let i = 0; i < details.length; i++) {
//     console.log(Object.keys(details));
//     console.log(Object.values(details));
// }



/////Excercise 7\\\\
///...... cant do this one... tried to ask for help, never got an answer...


// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//     names.charAt()

// }
