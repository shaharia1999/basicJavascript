function latter(num){
    let calculation;
    switch(true){
        case (num>=90 && num<=100):
        calculation="toi A+ paichot";
        break;
        case (num>80 && num<90):
            calculation="toi A paichot";
            break;
            
        case (num>70 && num<80):
            calculation="toi A - paichot";
            break;
        case (num>60 && num<70):
            calculation="toi B paichot";
            break;
        case (num>50 && num<60):
            calculation="toi C paichot";
            break;
        case (num>=40 && num<50):
            calculation="toi D paichot";
            break;
        case (num<39 ):
            calculation="fail marchot";
            break;
        case (num<=0 || num>100 ):
            calculation="invalid number";
            break;
            // default:
            //     return 'INVALID SCORE';

    }
    return calculation;
}
let numf=96;
let nums=86;
let numt=66;
let numfr=36;
letend=120;
const result=latter(120);
console.log(result);
