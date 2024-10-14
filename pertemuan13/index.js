// Rest Parameter & Spread Operator
//1. Rest Parameter
// Tanpa rest parameter
const func1 = (param1,param2,param3)=>{
    console.log(param1,param2,param3);
}
func1=("A","B","C")

// Dengan Rest Parameter
Const func2 (...params)=>{
    console.log(params);
}
func2(("A","B","C"))



func3("A","B","C","D","E")
Const func3 (param1,param2...params)=>{
    console.log(param1,param2);
    console.log(params);
}
func3("A","B","C,"D","E"")

// // Mini Exercise
// const penjumlahan = (a,b,c,d,e)=>{
//     let arr = [a,b,c,d,e];
//     let hasil = 0;
//     arr.forEach((item)=> (hasil += item));
//     return hasil;
// }
// console.log(penjumlahan(1,2,3,4,5));

// // setelah diubah menggunakan params
// const penjumlahan (...param)=>{
//     let hasil = 0;
//     arr.forEach((item)=> (hasil += item));
//     return hasil;
// }
// console.log(penjumlahan(1,2,3,4,5));

// 2.Spread operator(Menyebarkan array)

let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(...numbers);

// 1.duplikasi array
let nmbers2 = [...numbers];
console.log(nmbers2);

let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [7,8,9];

let numbers3 = array1.concat(array2,array3);
let numbers4 = [...array1,...array2,...array3];

// 2.Duplikasi objek
const jhon = {
    fullName = "Jhon doe"
    age = 30;
}
const john2 = {...jhon ,address: "Manado"};

// 3.Menggabungkan objek





