function arryLowest(num){
    let lowest=num[0];
    for(let i=0;i<num.length;i++){
         var element=num[i];
         if(element<lowest){
             lowest=element;
         }
    }
    return lowest;
}
let age=[12,35,98,98,54,2];
let result=arryLowest(age);
console.log(result);