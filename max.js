// const business=450;
// const minister=950;
// const army=600;
// if(business>minister){
//     console.log("business er pola doni")
// }
// else{
//     console.log("minister er pola doni")
// }
// compare three
// if(business>minister && business>army){
//     console.log("business er pola doni")
// }
// else if(minister>business &&minister>army){
//       console.log("minister er pola kob doni")
// }
// else{
//     console.log("army true")
// }
// var max=Math.max(business,minister,army);
// console.log("largest is max",max);
// function findMax(first,second,three){

//         if(business>minister){
//           console.log("business er pola doni");
//          return business;
//         }

//         else if(minister>business &&minister>army){
//              console.log("minister er pola kob doni");
//              return minister;
//         }
//         else{
//              console.log("army true");
//              return minister;
//         }
// }
// const business=450;
// const minister=950;
// const army=600;
// var result=findMax(business,minister,army);
// console.log(result);

// creaTE  a function to finding small latter in javasript
function smallfind(one,two,three){
    var chotomia;
    switch(true){
        case (one<two && one<three):
           chotomia=console.log("toi oi sobar choto oNE",one);
  
        case (two<one && two<three):
           chotomia=console.log("toi oi sobar choto  TWO",two);
        
        case (three<two && three<one):
           chotomia=console.log("toi oi sobar choto THREE",three);
     
         default:
             return console.log("invalid");

    }
}
let first=40;
let second=40;
let third=40;
const result=smallfind(first,second,third);
