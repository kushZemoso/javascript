var firstName=prompt("Enter the First Name");
var lastName=prompt("Enter the Last Name");

let hello=(firstName,lastName)=>{
   return (firstName.slice(0,1)+lastName.slice(0,1));
  }

document.getElementById("demo").innerHTML = hello(firstName,lastName);
alert(hello(firstName,lastName));

document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {
   document.getElementById("top").innerHTML = Date();
 }

