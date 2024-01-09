/*
-----assignment operator-----

let x = 10;
let y = 5

x += y;

console.log(x); 15


let x = 10;
let y = 5;
 
x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;



-----comparison operator-----

==
!=
===
!==
>
>=
<
<=


let a = 10;
let b = 12;

console.log(a < b); true
console.log(a > b); false


----- perbedaan == dan === -----

const aString = '10';
const aNumber = 10;

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda


-----logical operator-----
&&
||
!

contoh

let a = 10;
let b = 12;

/* AND operator
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

    
    */