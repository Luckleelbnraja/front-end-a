// // string literals,arrow function &
// // default parameter

// // 1.String Literals
// let fullName = "Jhon doe";
// let age = 30;
// let address = "Manado"

// // Hal

// let kalimat = "Halo nama saya" + fullName + "umur saya" + age + "saya tinggal di " + address;

// console.log(kalimat);

// let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} saya tinggal di ${address}`
// console.log(kalimat2);

// Arrow function

function sayGreetings(){
    return `Hello my name is ${fullName}`

}
console.log(sayGreetings("lumbannraja"));

const sayGreetings2 = () => {
    return `Hello my name is ${fullName}`
}
console.log(sayGreetings2(Lucklee));

// Arrow function pada IIFE
let uotput = (()=> "Hello ")();
console.log(output);

// Arrow function pada callback
let numbers = 

// Default parameter
const sayGreetings3 = (fullName) => {
    if (fullName === undefined){
        fullName = "LUMBANRAJA"
    }
    console.log(`Hallo nama saya $(fullName) `);
};

sayGreetings3();
const sayGreetings4 = {fullName = "Lumbanraja" , age = 18 , address = "Airmadidi"}

console.log{
    `Hallo nama saya ${fullName}, umur saya ${age} , alamat saya ${address}`
};
};