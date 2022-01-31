function interest(taka,rate,year){
    let  sod;
    let sodAsol;
    sod= taka*rate/100*year;
    sodAsol=taka+sod;
    return sodAsol;
}
const result=interest(3000,5,7);
console.log(result);