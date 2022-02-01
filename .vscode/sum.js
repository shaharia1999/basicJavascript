
// let sum=0;
// for(let i=0; i<numbers.length;i++){
//     let element= numbers[i];
//      sum=sum +element;
// }
// console.log(sum);

function arrayTotal(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        let element=numbers[i];
        sum=sum + element;

}
return sum;
}
const numbers=[44,55,37,98,83,78];
 const total=arrayTotal(numbers);
 console.log(total);

