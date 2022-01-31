// odd chackbox
function oddEven(num){
    let chackResult;
    if(num %2==0){
      chackResult="odd is true";
    }
    else{
        chackResult="this is even"
    }
    return chackResult;
}
var input=20;
var input1=201;
var input2=202;
var input3=203;
const result=oddEven(input1);
// console.log("this is awesome function to chackUp odd or even number  ",result);
// even chackbok
function evenOdd(number){
    let calculation;
    if(number %2 !==0){
        calculation=true;

    }
    else{
        calculation=false;
    }
    return calculation;
}
let firstDigit=30;
let secondDigit=34;
let thirdDigit=13;
const feedback=evenOdd(thirdDigit);
console.log("miss you error mama ", feedback);

