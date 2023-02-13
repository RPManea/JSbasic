document.write("Hello world")
console.log({"username": "ryan",
"score": 70.4});
console.log("-----------TIPOS DE VARIABLES--------------")
var nameuser = "Raul";
let lastname = "Petre"
console.log(nameuser, lastname)

const PI = 3.1415;
const id = "user1";
console.log(PI)
let exmpl = "name";
exmpl = "Rename";
console.log(exmpl)
console.log("------------2-------------")

let passwordDB = "1234"

let input = "4312"

let result = input == passwordDB;

if (result == true) {

    console.log("Login succsessful")

}else{

    console.log("Wrong login")

}

console.log(result)
console.log("------------3-------------")

let score = (13);

if (score > 30){
    console.log("You need to practice more");
} else if (score > 15){
    console.log("Your improving!");
}else {
    console.log("You need to follow this tutorial")
}
console.log("------------4-------------")

let typeCard = 'Credit Csafard';

switch(typeCard) {
    case 'Debid Card':
        console.log('Thia is a debid card')
        break;
    case 'Credit Card':
        console.log('Thia is a credit card')
        break;
    default:
        console.log('No type card')
}
console.log("------------LOOPS-------------")

let count = 1;

while(count <= 10) {
    console.log(count);
    count++;
}
console.log("------------ARRAYS-------------")

let names = ['ryan', 'joe', 'john'];

console.log(names[1])
console.log(names.length)

for(let i = 0; i < names.length; i++) {
    console.log(names[i])
}
//otra opcion igual a la de arriba pero recorriendo la lista al reves
for(let i = names.length - 1; i >= 0; i--) {
    console.log(names[i])
}
console.log("------------FUNCTIONS-------------")


function greeting(name) {
    console.log('Hello ' + name);
}

greeting("Raul Petre");

function sum(a,b)
{
    let resultado = a + b;
    alert("The result of "+ a + " + " + b + " is " + resultado)
}

function showName(n)
{
    document.getElementById("mensaje").innerHTML = n
}