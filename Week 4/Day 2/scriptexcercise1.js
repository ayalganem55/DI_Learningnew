

//////////////// Exercise 1 : Information
// part 1
// let plinfo = {
//     firstName: 'Shachaf',
//     age: 25,
//     hobbies: " diving & playing the guitar",

// }

// function infoAboutMe() {
    
//     console.log ("My name is " + plinfo.firstName + " I am " + plinfo.age + " and my hobbies are" + plinfo.hobbies)
// }
// infoAboutMe()


// part 2

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log ('My name is ' + personName + ' i am ' + personAge + ' years old, my favorite color is ' + personFavoriteColor)

// }

// infoAboutPerson('David', 50, 'Blue')
// infoAboutPerson("Josh", 12, "yellow")

///////////////Exercise 2 : Tips

// function calculateTip() {
//     let bill = Number(prompt("How much was the bill?"))
//     let result = {}
//     if (bill <= 50) {
//         result = bill * 0.2;
//     } else if (bill > 50 && bill <= 200) {
//         result = bill * 0.15
//     } else if (bill > 200)
//         result = bill * 0.1
//         console.log ("Your bill was" + bill + "$, you should tip " +result)
//     }

//     calculateTip()



///////////////// Exercise 3 : Find The Numbers Divisible By 23


// function isDivisible() {
//     var sum = 0;
//     for (let i = 0; i < 500; i++)
//         if (i % 23 === 0) {
//             sum += i;
//             console.log(sum);
//         }
// }
// isDivisible()




// Exercise 4 : Shopping List

// let stock = {
//   "banana": 6,
//   "apple": 0,
//   "pear": 12,
//   "orange": 32,
//   "blueberry":1
// }

// let prices = {
//   "banana": 4,
//   "apple": 2,
//   "pear": 1,
//   "orange": 1.5,
//   "blueberry":10
// }

// let shoppingList = ['banana', 'orange', 'apple']


// function myBill() {
//   let totalPrice = 0;
//   for (let item of shoppingList) {
//       if (stock[item] != 0) {
//           totalPrice += prices[item];
//       stock[item] -= 1;
//     }
//     return totalPrice;
//   }
// }

// console.log(myBill());



///////// Excercise 5 - What's  in my wallet \\\\\\\\


// let itemPrice = 4.25

// let amountOfChange = [25, 20, 5, 0]
// let changeSum = amountOfChange.sum
// function changeEnough(itemPrice, amountOfChange) {
//     if (amountOfChange.sum > )
// }

// changeEnough(4.25, [25, 20, 5, 0])


/////////Exercise 6 : Vacations Costs\\\\\\\\\\\

let nightsStay = Number(prompt('For how many nights would you like to stay?'))
let price = 140;
let totalPrice = nightsStay * price;

function hotelCost() {

    console.log(totalPrice)
    return totalPrice;

}
hotelCost(totalPrice)

// let London = 183;
// let Paris = 220;
// let otherDestinations = 300;

// function planeRideCost() {
//     let destination = prompt("What is your destination?")
    
//     console.log(destination)
// }

// planeRideCost()


