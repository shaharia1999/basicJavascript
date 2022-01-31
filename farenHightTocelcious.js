function farenheightTocel(number){
    let celseus;
    celseus=(number-32)*5/9;
    return celseus;
}
var input=50;
const result=farenheightTocel(input);
console.log(" pure javascript code ", result);