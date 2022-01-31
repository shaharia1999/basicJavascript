function leapyear(year){
    var calculation;
    if(year %4==0){
        calculation="this is the leap year"
    }
    else {
        calculation ="toi akta pagol";
    }
    return calculation;
}
var input=2024;
var input2=2040;
var result=leapyear(input);
console.log(" shaharia toi akto hoile o brilliant achot ",result);