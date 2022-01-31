// function factorial(quesction){
//    let fac=1;
//    let i=1;
//    while(i<=quesction){
//        fac=fac * i;
//        i++;
//    }
//    return fac;

// }
//   var input=6;
//  const result =factorial(input);
//  console.log(result);
//  function fact(num) { 
//     var i=1;
//     var factorial=1;
//     while(i<=num){
//         factorial=factorial*i;
//         i++;
//     }
//     return factorial;
  
//  }
//  const myfac=fact(5);
//  console.log(myfac);
function facto(number){
    var factor=1;
   
    for( var i=1; i <=number; i++){
        factor=factor * i;
    }
    return factor;
}
var num=4;
var outPut=facto(num);
console.log(outPut);