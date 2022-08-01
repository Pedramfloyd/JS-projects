setInterval(updateClock,1000);


function updateClock(){

    let now= new Date()
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let weekday = [ "Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]
    let today = weekday[now.getDay()];
    let months = now.toLocaleString("default" , { month: "long"});
    let year = now.getFullYear();
    let period = "AM" ;

   


if (hours>12) {

    hours-=12;
    period="PM"
        
}

if(hours===0) {

    hours=12
    period="AM"
}

hours=hours<10 ? "0" + hours : hours;
minutes=minutes<10 ? "0" + minutes : minutes ;
seconds=seconds<10 ? "0" + seconds : seconds ;

var time=document.querySelector(".time")
time.innerHTML= hours + ":" + minutes + ":" + seconds + " " + period;
var date=document.querySelector(".date")
date.innerHTML=  today + ", " + months + ", " + year;

}

updateclock();
