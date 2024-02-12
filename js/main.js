//alert('We are Beta!!!');
console.log('We are Beta!!!');

var firstName ="Linda";
var age = 1;

let lastName ="Azuma";
const boilingWaterTemperature= 100;

console.log(firstName,age,lastName,boilingWaterTemperature);


//Conditional Statement (if/Else)
if (age>=18) {
    console.log('Your are eligible');
}
else {
    console.log('Wait till you are eligible');
}

// Loops(For)
 for(let i=1; i<8;i++){
    console.log('I am at index',i);
 }

 // Function- Define
 function isEligible () {
    if (age>=18) {
        return 'Your are eligible';
    }else {
        return 'Wait till you are eligible';
    }

 }
 // Funtion- Invoking
 alert(isEligible());