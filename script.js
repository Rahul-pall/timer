let last_date="10 dec 2023 6:56 Pm";
// let last_date=prompt("Enter date formate like ' 1 january 2024 10:00 pm'");
document.getElementById("date").innerHTML=last_date;

const input=document.querySelectorAll("input");

let clock=()=>{
let lastdate=new Date(last_date);
let now_date=new Date();

const diff=(lastdate-now_date)/1000;
console.log(diff)

if(diff<0)return
input[0].value=Math.floor((diff/3600/24));
input[1].value=Math.floor(((diff/3600)%24));
input[2].value=Math.floor((diff/60%60));
input[3].value=Math.floor((diff%60));
console.log(diff/3600/24)
}
clock();

setInterval(() => {
              clock();          
}, 1000);
/**
 *! 1 day  = 24hour
 *! 1 hour = 60min
 *! 60 min = 360sec
 */