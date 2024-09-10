calculateArea();
greetUser();
function calculateArea() {
 const radius = 5;
 let area
 area = Math.PI * radius * radius;  //area is already declared
 console.log(area);
}
function greetUser() {
    var userName = "John";
    console.log(userName); //username should be declared before print
}