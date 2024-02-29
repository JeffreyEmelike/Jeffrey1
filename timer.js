function updateTimer(){
    //set the date we're counting down to (March 8 2024 11:30:00)
var countDownDate = new Date("March 8, 2024 11:30:00").getTime();

//update countdown every second 
var x = setInterval(function(){
    //Get current date and time
    var now = new Date().getTime();

    //calculate the distance between now and the countdown date
    var distance = countDownDate - now;

    //calculate days, hours, minutes, and seconds
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance %(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance %(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance %(1000*60))/1000);

    //display countdown timer
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    //if the timer ends, rest after 10 days
    if(distance < 0 ){
        clearInterval(x);
        countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + 10);
        updateTimer(); // restart the timer
    }
}, 1000);
}
updateTimer();