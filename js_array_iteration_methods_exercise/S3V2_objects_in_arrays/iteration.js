// const users = [
//   {name: 'Samir', age: 23},
//   {name: 'Angela', age: 33},
//   {name: 'Beatrice', age: 42}
// ];

// const newUsersArray = users.filter( user => {
//   return user.name !== 'Samir';
// });

// const ageOfUsers = users.map( user => `${user.name} is ${user.age} years old.`);

// console.log(newUsersArray);
// console.log(ageOfUsers);

/*
{
  Samir: 23;
  Angela: 33;
  Beatrice: 42;
}
*/

// const usersObject = users.reduce( (usersObject, user) => {
//   usersObject[user.name] = user.age;
//   return usersObject
// }, {});

// console.log(usersObject);






// const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

//     // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

// const sNames = userNames
//     .filter( name => name.startsWith('S'))
//     .map( name => ({name: name}));
// console.log(sNames);




// const users = [
//   {name: 'Samir', age: 27},
//   {name: 'Angela', age: 33},
//   {name: 'Beatrice', age: 42},
//   {name: 'Shaniqua', age: 30},
//   {name: 'Marvin', age: 23},
//   {name: 'Sean', age: 47}
// ];

//     // Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];

// const usersOver30 = users
//     .filter( user => user.age >= 30)
//     .map( user => user.name);

// console.log(usersOver30);







// const products = [
//   { name: 'hard drive', price: 59.99 },
//   { name: 'lighbulbs', price: 2.59 },
//   { name: 'paper towels', price: 6.99 },
//   { name: 'flatscreen monitor', price: 159.99 },
//   { name: 'cable ties', price: 19.99 },
//   { name: 'ballpoint pens', price: 4.49 }
// ];

//     // Result: { name: 'paper towels', price: 6.99 }


// const mostExpensiveUnder10 = products
//     .filter( product => product.price < 10)
//     .reduce( (acc, product)  => {
//        if (acc.price > product.price){
//           return acc;
//        } 
//        return product;
//     })
    

// console.log(mostExpensiveUnder10);



// const totalPriceOver10 = products
//     .filter( product => product.price > 9.99)
//     .reduce( (acc, product)  => {
//        return acc + product.price
//     }, 0)
//     .toFixed(2);
    

// console.log(totalPriceOver10);









// const movies = [
//   ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
//   ['Finding Dory'],
//   ['Jaws', 'On the Waterfront']
// ]

//     // Result: ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters', 'Finding Dory', 'Jaws', 'On the Waterfront']

// const flatMovies = movies.reduce( (arr, movie) => [...arr, ...movie], []);
// console.log(flatMovies);










// const users = [
//   {
//     name: 'Samir',
//     age: 27,
//     favoriteBooks:[
//       {title: 'The Iliad'},
//       {title: 'The Brothers Karamazov'}
//     ]
//   },
//   {
//     name: 'Angela',
//     age: 33,
//     favoriteBooks:[
//       {title: 'Tenth of December'},
//       {title: 'Cloud Atlas'},
//       {title: 'One Hundred Years of Solitude'}
//     ]
//   },
//   {
//     name: 'Beatrice',
//     age: 42,
//     favoriteBooks:[
//       {title: 'Candide'}
//     ]
//   }
// ];

//     // Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];


// // const newArr = users.reduce( (arr, user) => [...arr, user.reduce( (titles, book) => [...titles, ...book], [])], []);
// // console.log(newArr);

// const books = users
//     .map(user => user.favoriteBooks.map(book => book.title))
//     .reduce( (titles, book) => [...titles, ...book], []);

// console.log(books);














const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"]
    }
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"]
    }
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"]
    }
  }
];
let hobbies;

// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
// Write your code below
hobbies = customers
  .reduce( (acc, customer) => [...acc, ...customer.personal.hobbies],[])
  //.reduce( (acc, hobbies) => [...acc, ...hobbies], []);  

console.log(hobbies);