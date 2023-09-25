// const strings = ['1','2','3','4','5'];

// const numbers = strings.map( string => parseInt(string, 10));
// console.log(numbers)


// const fruits = ['apple', 'pear', 'cherry'];

// const capitalizedFruits = fruits.map(fruit =>  fruit.toUpperCase());

// console.log(capitalizedFruits);

// const prices = [5, 4.23, 6.4, 8.09, 3.20];

//     // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]
// const priceToDollars = price => `$${price.toFixed(2)}`
// const formattedPrices = prices.map( priceToDollars )
// console.log(formattedPrices);


// let total = [0,1, 2, 3].reduce ((acc, cur) => acc + cur, 0);
// console.log(total);

// const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

// const total = prices.reduce( (acc, c) => acc + c, 0);

// console.log(total);



// const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

//     // Result: 4

// const numNamesStartingWithG = names.reduce( (acc, c)=> {
//     if (c[0] === 'G'){
//         return acc + 1;
//     }
//     return acc;
// }, 0);    

// console.log(numNamesStartingWithG)






const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

// numberOf503 should be: 3
// Write your code below

numberOf503 = phoneNumbers.reduce( (count, number) => {
  if (number[1] === '5' && number[2] === '0' && number[3] === '3'){
      return count + 1;
  }
  return count;
}, 0);

console.log(numberOf503);