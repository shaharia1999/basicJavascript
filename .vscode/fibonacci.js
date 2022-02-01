// febo =dara =0,1,1,2,3,5,8,13,21,34,55

// const febo =[0,1];
// for(let i=2; i<=10;i++){
//     // nth=(n-1)+(n-2);
//     febo[i];
//     febo[i]=febo[i-1]+febo[i-2];

// }
// console.log(febo);

function fibonacciSerice(num){
    if(typeof num !='number'){
        return 'please give a numver'
    }
    if(num<0){
        return "please inter a possitive number greter then 2"
    }
    let fibo=[0,1];
    for(let i=2; i<=num;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
const result =fibonacciSerice(45);
console.log(result);