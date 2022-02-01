function largeElementg(numbers){
    let largest=numbers[0];
    for(let i=0; i<numbers.length;i++){
        // console.log(i);
        let values=numbers[i];
        if(values>largest){
            largest=values;
        }
    }
    return largest;

}
const number=[12,23,54,65];
const oldes=largeElementg(number);
const oldest2 =largeElementg([-2,-3,-4,-0.6]);
console.log(oldest2);
