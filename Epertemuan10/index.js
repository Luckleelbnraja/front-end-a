// let people =["Greg","Mary","Devon","James"];


// //1. for - loop
// for (let i = 0; i < people.length; i++) {
//    console.log(people);
//  }

//  //2.forEach()
// people.forEach(function (item) {
//     console.log(item);
// });
    
// //3.to remove "Greg"
// people.splice(people.indexOf("Greg"));
//   console.log(people);

// //4.to remove "James"
// people.splice(people.indexOf("James"));
//     console.log(people);

// //5.to add "Matt" to the front of array
// people.unshift("Matt")
//     console.log(people);

// //6.to add my name to the end of array
// people.push("Luck lee")
//     console.log(people);

// //7.using for loop
// for (let i = 0; i < people.lenght;i++) {
//     console.log(people[i]);
//     if (people[i]==="Mary") {
//         break;
//     }
// }

// //8.to make a copy if tge array
// let peopleCopy = people.slice(2);
//     console.log(peopleCopy);

// //9.
// people = ["Greg", "Mary", "Devon", "James"];
// people.splice(people.indexOf("Devon"), 1, "Elizabeth", "Artie","Luck lee");
// people.unshift("Matt");
// people.splice(people.indexOf("James"), 1);
//     console.log(people);

// //10.
// let withBob = people.concat("Bob");
//     console.log(withBob);


// // Object Exercises
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
//   };
  
//   // 1. 
// programming.languages.push("Go");
//   console.log(programming);
  
//   // 2.
// programming["difficulty"] = 7;
//   console.log(programming);
  
//   // 3. 
// delete programming.jokes;
//   console.log(programming);
  
//   // 4. 
// programming.isFun = true;
//   console.log(programming);
  
//   // 5.
