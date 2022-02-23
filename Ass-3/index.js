const printName = (name) => "Hi " + name;
document.getElementById("demo").innerHTML = printName("Kushagra!");
  
const printBill = (name, bill) =>"Hi " + name + ", please pay: " + bill;
document.getElementById("top").innerHTML = printBill("Kushagra",500);

const person = {
    name: "Noam Chomsky",
    age: 92
}
let {name} = person;
let {age} = person;
document.getElementById("cs").innerHTML = name + age;


 
