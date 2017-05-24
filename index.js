$("#info-button").click(function(){
 	alert("To calculate the hour : Add the values of red and blue squares.\n\n The minutes will be multiples of 5 in fibonacci clock.\n\n To calculate minutes : Add the values of green and blue squares and multiply the result with 5.\n\n In case of the absence of red and green squares or only the blue squares are to be found then the hours value will be the addition of values of blue squares and the minutes value will be the addition of values of blue squares * 5.");
});
var d = new Date();
var hrs = 0, mins = 0;
var firstHour = d.getHours(), firstMinute = d.getMinutes(), firstTime = true;
var setHours = function(h,m){
  switch (h) {
    case 0 :

      $(" #one1, #one2, #two, #three, #five").addClass("red");

      if (m > 0 && m <= 5) {
        $("#one2").addClass("blue");
      }

      else if (m > 5 && m <= 10) {
        $("#one1, #one2").addClass("blue");
      }

      else if (m > 10 && m <= 15) {
        $("#one1, #two").addClass("blue");
      }

      else if (m > 15 && m <= 20) {
        $("#one1, #one2, #two").addClass("blue");
      }

      else if (m > 20 && m <= 25) {
        $("#five").addClass("blue");
      }

      else if (m > 25 && m <= 30) {
        $("#one1, #five").addClass("blue");
      }

      else if (m > 30 && m <= 35) {
        $("#one1, #one2, #five").addClass("blue");
      }

      else if (m > 35 && m <= 40) {
        $("#three, #five").addClass("blue");
      }

      else if (m > 40 && m <= 45) {
        $("#one1, #three, #five").addClass("blue");
      }
      else if (m > 45 && m <= 50) {

        $("#two, #three, #five").addClass("blue");
      }

      else if (m > 50 && m <= 55) {
        $("#one1, #two, #three, #five").addClass("blue");
      }

      else if (m > 55 && m <= 59) {
        resetColors();
        $("#one1").addClass("red");
      }
      break;

    case 1 :

      resetColors();
      $("#one1").addClass("red");

      if( m > 0 && m <= 5){
        resetColors();
        $("#one1").addClass("red");
        $("#one2").addClass("green");
      }

      else if( m > 5 && m <= 10){
        resetColors();
        $("#one1").addClass("red");
        $("#two").addClass("green");
      }

      else if( m > 10 && m <= 15){
        resetColors();
        $("#one1").addClass("red");
        $("#three").addClass("green");
      }

      else if( m > 15 && m <= 20){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #three").addClass("green");
      }

      else if( m > 20 && m <= 25){
        resetColors();
        $("#one1").addClass("red");
        $("#five").addClass("green");
      }

      else if( m > 25 && m <= 30){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #five").addClass("green");
      }

      else if( m > 30 && m <= 35){
        resetColors();
        $("#two, #five").addClass("green");
        $("#one1").addClass("red");
      }

      else if( m > 35 && m <= 40){
        resetColors();
        $("#one1").addClass("red");
        $("#three, #five").addClass("green");
      }

      else if( m > 40 && m <= 45){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #three, #five").addClass("green");
      }

      else if( m > 45 && m <= 50){
        resetColors();
        $("#one1").addClass("red");
        $("#two, #three, #five").addClass("green");
      }

      else if( m > 50 && m <= 55){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #two, #three, #five").addClass("green");
      }

      else if( m > 55 && m <= 59){
        resetColors();
        $("#two").addClass("red");
      }
      break;

    case 2 :

      resetColors();
      $("#two").addClass("red");

      if( m > 0 && m <= 5){
        resetColors();
        $("#two").addClass("red");
        $("#one1").addClass("green");
      }

      else if(m > 5 && m <= 10){
        resetColors();
        $("#two").addClass("red");
        $("#one1, #one2").addClass("green");
      }

      else if(m > 10 && m <= 15){
        resetColors();
        $("#two").addClass("red");
        $("#three").addClass("green");
      }

      else if(m > 15 && m <= 20){
       resetColors();
       $("#two").addClass("red");
       $("#one1, #three").addClass("green");
      }

      else if(m > 20 &&  m <= 25){
       resetColors();
       $("#two").addClass("red");
       $("#five").addClass("green");
      }

      else if(m > 25 && m <= 30){
       resetColors();
       $("#two").addClass("red");
       $("#one1, #five").addClass("green");
      }

      else if(m > 30 && m <= 35){
       resetColors();
       $("#two").addClass("red");
       $("#one1, #one2, #five").addClass("green");
      }

      else if(m > 35 && m <= 40){
       resetColors();
       $("#two").addClass("red");
       $("#three, #five").addClass("green");
      }

      else if(m > 40 && m <= 45){
       resetColors();
       $("#two").addClass("red");
       $("#one1, #three, #five").addClass("green");
      }

      else if(m > 45 && m <= 50){
       resetColors();
       $("#two").addClass("red");
       $("#one1, #one2, #three, #five").addClass("green");
      }

      else if(m > 50 && m <= 55){
       resetColors();
       $("#one1").addClass("red");
       $("#one2").addClass("blue");
       $("#two, #three, #five").addClass("green");
      }

      else if(m > 55 && m <= 59){
       resetColors();
       $("#three").addClass("red");
      }
      break;

    case 3 :
      resetColors();
      $("#three").addClass("red");

      if( m > 0 && m <= 5){
        resetColors();
        $("#three").addClass("red");
        $("#one1").addClass("green");
      }

      else if( m > 5 && m <= 10){
        resetColors();
        $("#three").addClass("red");
        $("#two").addClass("green");
      }

      else if( m > 10 && m <= 15){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #two").addClass("green");
      }

      else if( m > 15 && m <= 20){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #one2, #two").addClass("green");
      }

      else if( m > 20 && m <= 25){
        resetColors();
        $("#three").addClass("red");
        $("#five").addClass("green");
      }

      else if( m > 25 && m <= 30){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #five").addClass("green");
      }

      else if( m > 30 && m <= 35){
        resetColors();
        $("#three").addClass("red");
        $("#two, #five").addClass("green");
      }

      else if( m > 35 && m <= 40){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #two, #five").addClass("green");
      }

      else if( m > 40 && m <= 45){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #one2, #two, #five").addClass("green");
      }

      else if( m > 45 && m <= 50){
        resetColors();
        $("#one1").addClass("red");
        $("#three, #five").addClass("green");
        $("#two").addClass("blue");
      }

      else if( m > 50 && m <= 55){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #three, #five").addClass("green");
        $("#two").addClass("blue");
      }

      else if( m > 55 && m <= 59){
        resetColors();
        $("#three").addClass("red");
      }
      break;

    case 4 :

      resetColors();
      $("#one1, #three").addClass("red");

      if(m > 0 && m <= 5){
        resetColors();
        $("#one1, #three").addClass("red");
        $("#one2").addClass("green");
      }

      else if(m > 5 && m <= 10){
        resetColors();
        $("#one1, #three").addClass("red");
        $("#two").addClass("green");
      }

      else if(m > 10 && m <= 15){
        resetColors();
        $("#one1, #three").addClass("red");
        $("#two, #one2").addClass("green");
      }

      else if(m > 15 && m <= 20){
        resetColors();
        $("#one1").addClass("red");
        $("#one2").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 20 && m <= 25){
        resetColors();
        $("#one1, #three").addClass("red");
        $("#five").addClass("green");
      }

      else if(m > 25 && m <= 30){
        resetColors();
        $("#one1, #three").addClass("red");
        $("#one2, #five").addClass("green");
      }

      else if(m > 30 && m <= 35){
        resetColors();
        $("#one1, #three").addClass("red");
        $("#two, #five").addClass("green");
      }

      else if(m > 35 && m <= 40){
        resetColors();
        $("#one1").addClass("red");
        $("#five").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 40 && m <= 45){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #five").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 45 && m <= 50){
        resetColors();
        $("#one1").addClass("red");
        $("#two, #five").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 50 && m <= 55){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #two, #five").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 55 && m <= 59){
        resetColors();
        $("#five").addClass("red");
      }
      break;

     case 5 :

      resetColors();
      $("#five").addClass("red");

      if (m > 0 && m <= 5) {
       resetColors();
       $("#five").addClass("red");
       $("#one1").addClass("green");
       }

      else if (m > 5 && m <= 10) {
       resetColors();
       $("#five").addClass("red");
       $("#two").addClass("green");
      }

      else if (m > 10 && m <= 15) {
       resetColors();
       $("#five").addClass("red");
       $("#three").addClass("green");
      }

      else if (m > 15 && m <= 20) {
       resetColors();
       $("#five").addClass("red");
       $("#one1, #three").addClass("green");
      }

      else if (m > 20 && m <= 25) {
       resetColors();
       $("#five").addClass("red");
       $("#two, #three").addClass("green");
      }

      else if (m > 25 && m <= 30) {
       resetColors();
       $("#five").addClass("red");
       $("#one1, #two, #three").addClass("green");
      }

      else if (m > 30 && m <= 35) {
       resetColors();
       $("#five").addClass("red");
       $("#one1, #one2, #two, #three").addClass("green");
      }

      else if (m > 35 && m <= 40) {
       resetColors();
       $("#two").addClass("red");
       $("#five").addClass("green");
       $("#three").addClass("blue");
      }

      else if (m > 40 && m <= 45) {
       resetColors();
       $("#two").addClass("red");
       $("#one1, #five").addClass("green");
       $("#three").addClass("blue");
      }

      else if (m > 45 && m <= 50) {
       resetColors();
       $("#two").addClass("red");
       $("#one1, #one2, #five").addClass("green");
       $("#three").addClass("blue");
      }

      else if (m > 50 && m <= 55) {
       resetColors();
       $("#one1").addClass("red");
       $("#two, #five").addClass("green");
       $("#one2, #three").addClass("blue");
      }

      else if (m > 55 && m <= 59) {
       $("#one1, #five").addClass("red");
      }
      break;

    case 6 :

      resetColors();
      $("#one1, #five").addClass("red");

      if (m > 0 && m <= 5) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#one2").addClass("green");
      }

      else if (m > 5 && m <= 10) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#two").addClass("green");
      }

      else if (m > 10 && m <= 15) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#three").addClass("green");
      }

      else if (m > 15 && m <= 20) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#one2, #three").addClass("green");
      }

      else if (m > 20 && m <= 25) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#two, #three").addClass("green");
      }

      else if (m > 25 && m <= 30) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#one2, #two, #three").addClass("green");
      }

      else if (m > 30 && m <= 35) {
        resetColors();
        $("#one1").addClass("red");
        $("#two").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 35 && m <= 40) {
        resetColors();
        $("#one1").addClass("red");
        $("#three").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 40 && m <= 45) {
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #three").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 45 && m <= 50) {
        resetColors();
        $("#one1").addClass("red");
        $("#two, #three").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 50 && m <= 55) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#two, #one2, #three").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 55 && m <= 59) {
        resetColors();
        $("#two, #five").addClass("red");
      }
      break;

    case 7 :

      resetColors();
      $("#two, #five").addClass("red");

      if( m > 0 && m <= 5){
        resetColors();
        $("#two, #five").addClass("red");
        $("#one1").addClass("green");
      }

      else if( m > 5 && m <= 10){
        resetColors();
        $("#two, #five").addClass("red");
        $("#one1, #one2").addClass("green");
      }

      else if(m > 10 && m <= 15){
        resetColors();
        $("#two, #five").addClass("red");
        $("#three").addClass("green");
      }

      else if(m > 15 && m <= 20){
        resetColors();
        $("#two, #five").addClass("red");
        $("#one1, #three").addClass("green");
      }

      else if(m > 20 && m <= 25){
        resetColors();
        $("#five").addClass("red");
        $("#three").addClass("green");
        $("#two").addClass("blue");
      }

      else if(m > 25 && m <= 30){
        resetColors();
        $("#five").addClass("red");
        $("#two").addClass("blue");
        $("#one1, #three").addClass("green");
      }

      else if (m > 30 && m <= 35){
        resetColors();
        $("#five").addClass("red");
        $("#two").addClass("blue");
        $("#one1, #one2, #three").addClass("green");
      }

      else if(m > 35 && m <= 40){
        resetColors();
        $("#five").addClass("blue");
        $("#two").addClass("red");
        $("#three").addClass("green");
      }

      else if(m > 40 && m <= 45){
        resetColors();
        $("#five").addClass("blue");
        $("#two").addClass("red");
        $("#one1, #three").addClass("green");
      }

      else if(m > 45 && m <= 50){
        resetColors();
        $("#five").addClass("blue");
        $("#two").addClass("red");
        $("#one1, #one2, #three").addClass("green");
      }

      else if(m > 50 && m <= 55){
        resetColors();
        $("#one1").addClass("red");
        $("#two, #three").addClass("green");
        $("#one2, #five").addClass("blue");
      }

      else if(m > 55 && m <= 59){
        resetColors();
        $("#three, #five").addClass("red");
      }
      break;

    case 8 :

      resetColors();
      $("#three, #five").addClass("red");

      if(m > 0 && m <= 5){
        resetColors();
        $("#three, #five").addClass("red");
        $("#one1").addClass("green");
      }

      else if(m > 5 && m <= 10){
        resetColors();
        $("#three, #five").addClass("red");
        $("#two").addClass("green");
      }

      else if(m > 10 && m <= 15){
        resetColors();
        $("#three, #five").addClass("red");
        $("#one1, #two").addClass("green");
      }

      else if(m > 15 && m <= 20){
        resetColors();
        $("#three, #five").addClass("red");
        $("#one1, #one2, #two").addClass("green");
      }

      else if(m > 20 && m <= 25){
        resetColors();
        $("#five").addClass("red");
        $("#two").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 25 && m <= 30){
        resetColors();
        $("#three").addClass("red");
        $("#one1").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 30 && m <= 35){
        resetColors();
        $("#three").addClass("red");
        $("#two").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 35 && m <= 40){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #two").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 40 && m <= 45){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #one2, #two").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 45 && m <= 50){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #one2, #two").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 50 && m <= 55){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #three").addClass("green");
        $("#two, #five").addClass("blue");
      }

      else if(m > 55 && m <= 59){
        $("#one1, #three, #five").addClass("red");
      }
      break;

    case 9 :

      resetColors();
      $("#one1, #three, #five").addClass("red");

      if (m > 0 && m <= 5) {
        resetColors();
        $("#one1, #three, #five").addClass("red");
        $("#one2").addClass("green");
      }

      else if (m > 5 && m <= 10) {
        resetColors();
        $("#one1, #three, #five").addClass("red");
        $("#two").addClass("green");
      }

      else if (m > 10 && m <= 15) {
        resetColors();
        $("#one1, #three, #five").addClass("red");
        $("#one2, #two").addClass("green");
      }

      else if (m > 15 && m <= 20) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#one2").addClass("green");
        $("#three").addClass("blue");
      }

      else if (m > 20 && m <= 25) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#two").addClass("green");
        $("#three").addClass("blue");
      }

      else if (m > 25 && m <= 30) {
        resetColors();
        $("#one1, #three").addClass("red");
        $("#one2").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 30 && m <= 35) {
        resetColors();
        $("#one1, #three").addClass("red");
        $("#two").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 35 && m <= 40) {
        resetColors();
        $("#one1, #three").addClass("red");
        $("#one2, #two").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 40 && m <= 45) {
        resetColors();
        $("#one1").addClass("red");
        $("#one2").addClass("green");
        $("#three, #five").addClass("blue");
      }

      else if (m > 45 && m <= 50) {
        resetColors();
        $("#one1").addClass("red");
        $("#two").addClass("green");
        $("#three, #five").addClass("blue");
      }

      else if (m > 50 && m <= 55) {
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #two").addClass("green");
        $("#three, #five").addClass("blue");
      }

      else if(m > 55 && m <= 59) {
        resetColors();
        $("#two, #three, #five").addClass("red");
      }
      break;

    case 10 :

      resetColors();
      $("#two, #three, #five").addClass("red");

      if(m > 0 && m <= 5){
        resetColors();
        $("#two, #three, #five").addClass("red");
        $("#one1").addClass("green");
      }

      else if(m > 5 && m <= 10){
        resetColors();
        $("#two, #three, #five").addClass("red");
        $("#one1,#one2").addClass("green");
      }

      else if(m > 10 && m <= 15){
        resetColors();
        $("#three, #five").addClass("red");
        $("#one1").addClass("green");
        $("#two").addClass("blue");
      }

      else if(m > 15 && m <= 20){
        resetColors();
        $("#two, #five").addClass("red");
        $("#one1").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 20 && m <= 25){
        resetColors();
        $("#two, #five").addClass("red");
        $("#one1,#one2").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 25 && m <= 30){
        resetColors();
        $("#two, #three").addClass("red");
        $("#one1").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 30 && m <= 35){
        resetColors();
        $("#two, #three").addClass("red");
        $("#one1,#one2").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 35 && m <= 40){
        resetColors();
        $("#three").addClass("red");
        $("#one1").addClass("green");
        $("#two,#five").addClass("blue");
      }

      else if(m > 40 && m <= 45){
        resetColors();
        $("#two").addClass("red");
        $("#one1").addClass("green");
        $("#three,#five").addClass("blue");
      }

      else if(m > 45 && m <= 50){
        resetColors();
        $("#two").addClass("red");
        $("#one1,#one2").addClass("green");
        $("#three,#five").addClass("blue");
      }

      else if(m > 50 && m <= 55){
        resetColors();
        $("#one1").addClass("red");
        $("#two").addClass("green");
        $("#one2, #three, #five").addClass("blue");
      }

      else if(m > 55 && m <= 59){
        $("#one1,#two,#three,#five").addClass("red");
      }
      break;

    case 11 :

      resetColors();
      $("#one1, #two, #three, #five").addClass("red");

      if (m > 0 && m <= 5) {
        resetColors();
        $("#one1, #two, #three, #five").addClass("red");
        $("#one2").addClass("green");
      }

      else if (m > 5 && m <= 10) {
        resetColors();
        $("#two, #three, #five").addClass("red");
        $("#one2").addClass("green");
        $("#one1").addClass("blue");
      }

      else if (m > 10 && m <= 15) {
        resetColors();
        $("#one1, #three, #five").addClass("red");
        $("#one2").addClass("green");
        $("#two").addClass("blue");
      }

      else if (m > 15 && m <= 20) {
        resetColors();
        $("#one1, #three, #five").addClass("red");
        $("#one2").addClass("green");
        $("#two").addClass("blue");
      }

      else if (m > 20 && m <= 25) {
        resetColors();
        $("#two, #five").addClass("red");
        $("#one2").addClass("green");
        $("#one1, #three").addClass("blue");
      }

      else if (m > 25 && m <= 30) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#one2").addClass("green");
        $("#two, #three").addClass("blue");
      }

      else if (m > 30 && m <= 35) {
        resetColors();
        $("#two, #three").addClass("red");
        $("#one2").addClass("green");
        $("#one1, #five").addClass("blue");
      }

      else if (m > 35 && m <= 40) {
        resetColors();
        $("#one1, #three").addClass("red");
        $("#one2").addClass("green");
        $("#two, #five").addClass("blue");
      }

      else if (m > 40 && m <= 45) {
        resetColors();
        $("#one1, #two").addClass("red");
        $("#one2").addClass("green");
        $("#three, #five").addClass("blue");
      }

      else if (m > 45 && m <= 50) {
        resetColors();
        $("#two").addClass("red");
        $("#one2").addClass("green");
        $("#one1, #three, #five").addClass("blue");
      }

      else if (m > 50 && m <= 55) {
        resetColors();
        $("#one1").addClass("red");
        $("#one2").addClass("green");
        $("#two, #three, #five").addClass("blue");
      }

      else if (m > 55 && m <= 59) {
        $("#one1, #one2, #two, #three, #five").addClass("red");
      }
      break;

    case 12 :

      resetColors();
      $(" #one1, #one2, #two, #three, #five").addClass("red");

      if (m > 0 && m <= 5) {
        $("#one2").addClass("blue");
      }

      else if (m > 5 && m <= 10) {
        $("#one1, #one2").addClass("blue");
      }

      else if (m > 10 && m <= 15) {
        $("#one1, #two").addClass("blue");
      }

      else if (m > 15 && m <= 20) {
        $("#one1, #one2, #two").addClass("blue");
      }

      else if (m > 20 && m <= 25) {
        $("#five").addClass("blue");
      }

      else if (m > 25 && m <= 30) {
        $("#one1, #five").addClass("blue");
      }

      else if (m > 30 && m <= 35) {
        $("#one1, #one2, #five").addClass("blue");
      }

      else if (m > 35 && m <= 40) {
        $("#three, #five").addClass("blue");
      }

      else if (m > 40 && m <= 45) {
        $("#one1, #three, #five").addClass("blue");
      }
      else if (m > 45 && m <= 50) {

        $("#two, #three, #five").addClass("blue");
      }

      else if (m > 50 && m <= 55) {
        $("#one1, #two, #three, #five").addClass("blue");
      }

      else if (m > 55 && m <= 59) {
        resetColors();
        $("#one1").addClass("red");
      }
      break;

    case 13 :
      resetColors();
      $("#one1").addClass("red");

      if( m > 0 && m <= 5){

        $("#one1").addClass("red");
        $("#one2").addClass("green");
      }

      else if( m > 5 && m <= 10){
        resetColors();
        $("#one1").addClass("red");
        $("#two").addClass("green");
      }

      else if( m > 10 && m <= 15){
        resetColors();
        $("#one1").addClass("red");
        $("#three").addClass("green");
      }

      else if( m > 15 && m <= 20){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #three").addClass("green");
      }

      else if( m > 20 && m <= 25){
        resetColors();
        $("#one1").addClass("red");
        $("#five").addClass("green");
      }

      else if( m > 25 && m <= 30){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #five").addClass("green");
      }

      else if( m > 30 && m <= 35){
        resetColors();
        $("#two, #five").addClass("green");
        $("#one1").addClass("red");
      }

      else if( m > 35 && m <= 40){
        resetColors();
        $("#one1").addClass("red");
        $("#three, #five").addClass("green");
      }

      else if( m > 40 && m <= 45){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #three, #five").addClass("green");
      }

      else if( m > 45 && m <= 50){
        resetColors();
        $("#one1").addClass("red");
        $("#two, #three, #five").addClass("green");
      }

      else if( m > 50 && m <= 55){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #two, #three, #five").addClass("green");
      }

      else if( m > 55 && m <= 59){
        resetColors();
        $("#two").addClass("red");
      }
      break;

    case 14 :
      resetColors();
      $("#two").addClass("red");

      if( m > 0 && m <= 5){
        resetColors();
        $("#two").addClass("red");
        $("#one1").addClass("green");
      }

      else if(m > 5 && m <= 10){
        resetColors();
        $("#two").addClass("red");
        $("#one1, #one2").addClass("green");
      }

      else if(m > 10 && m <= 15){
        resetColors();
        $("#two").addClass("red");
        $("#three").addClass("green");
      }

      else if(m > 15 && m <= 20){
       resetColors();
       $("#two").addClass("red");
       $("#one1, #three").addClass("green");
      }

      else if(m > 20 &&  m <= 25){
       resetColors();
       $("#two").addClass("red");
       $("#five").addClass("green");
      }

      else if(m > 25 && m <= 30){
       resetColors();
       $("#two").addClass("red");
       $("#one1, #five").addClass("green");
      }

      else if(m > 30 && m <= 35){
       resetColors();
       $("#two").addClass("red");
       $("#one1, #one2, #five").addClass("green");
      }

      else if(m > 35 && m <= 40){
       resetColors();
       $("#two").addClass("red");
       $("#three, #five").addClass("green");
      }

      else if(m > 40 && m <= 45){
       resetColors();
       $("#two").addClass("red");
       $("#one1, #three, #five").addClass("green");
      }

      else if(m > 45 && m <= 50){
       resetColors();
       $("#two").addClass("red");
       $("#one1, #one2, #three, #five").addClass("green");
      }

      else if(m > 50 && m <= 55){
       resetColors();
       $("#one1").addClass("red");
       $("#one2").addClass("blue");
       $("#two, #three, #five").addClass("green");
      }

      else if(m > 55 && m <= 59){
       resetColors();
       $("#three").addClass("red");
      }
      break;

    case 15 :

      resetColors();
      $("#three").addClass("red");

      if( m > 0 && m <= 5){
        resetColors();
        $("#three").addClass("red");
        $("#one1").addClass("green");
      }

      else if( m > 5 && m <= 10){
        resetColors();
        $("#three").addClass("red");
        $("#two").addClass("green");
      }

      else if( m > 10 && m <= 15){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #two").addClass("green");
      }

      else if( m > 15 && m <= 20){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #one2, #two").addClass("green");
      }

      else if( m > 20 && m <= 25){
        resetColors();
        $("#three").addClass("red");
        $("#five").addClass("green");
      }

      else if( m > 25 && m <= 30){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #five").addClass("green");
      }

      else if( m > 30 && m <= 35){
        resetColors();
        $("#three").addClass("red");
        $("#two, #five").addClass("green");
      }

      else if( m > 35 && m <= 40){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #two, #five").addClass("green");
      }

      else if( m > 40 && m <= 45){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #one2, #two, #five").addClass("green");
      }

      else if( m > 45 && m <= 50){
        resetColors();
        $("#one1").addClass("red");
        $("#three, #five").addClass("green");
        $("#two").addClass("blue");
      }

      else if( m > 50 && m <= 55){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #three, #five").addClass("green");
        $("#two").addClass("blue");
      }

      else if( m > 55 && m <= 59){
        resetColors();
        $("#three").addClass("red");
      }
      break;

    case 16 :

      resetColors();
      $("#one1, #three").addClass("red");

      if(m > 0 && m <= 5){
        resetColors();
        $("#one1, #three").addClass("red");
        $("#one2").addClass("green");
      }

      else if(m > 5 && m <= 10){
        resetColors();
        $("#one1, #three").addClass("red");
        $("#two").addClass("green");
      }

      else if(m > 10 && m <= 15){
        resetColors();
        $("#one1, #three").addClass("red");
        $("#two, #one2").addClass("green");
      }

      else if(m > 15 && m <= 20){
        resetColors();
        $("#one1").addClass("red");
        $("#one2").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 20 && m <= 25){
        resetColors();
        $("#one1, #three").addClass("red");
        $("#five").addClass("green");
      }

      else if(m > 25 && m <= 30){
        resetColors();
        $("#one1, #three").addClass("red");
        $("#one2, #five").addClass("green");
      }

      else if(m > 30 && m <= 35){
        resetColors();
        $("#one1, #three").addClass("red");
        $("#two, #five").addClass("green");
      }

      else if(m > 35 && m <= 40){
        resetColors();
        $("#one1").addClass("red");
        $("#five").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 40 && m <= 45){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #five").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 45 && m <= 50){
        resetColors();
        $("#one1").addClass("red");
        $("#two, #five").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 50 && m <= 55){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #two, #five").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 55 && m <= 59){
        resetColors();
        $("#five").addClass("red");
      }
      break;

    case 17 :

      resetColors();
      $("#five").addClass("red");

      if (m > 0 && m <= 5) {
       resetColors();
       $("#five").addClass("red");
       $("#one1").addClass("green");
       }

      else if (m > 5 && m <= 10) {
       resetColors();
       $("#five").addClass("red");
       $("#two").addClass("green");
      }

      else if (m > 10 && m <= 15) {
       resetColors();
       $("#five").addClass("red");
       $("#three").addClass("green");
      }

      else if (m > 15 && m <= 20) {
       resetColors();
       $("#five").addClass("red");
       $("#one1, #three").addClass("green");
      }

      else if (m > 20 && m <= 25) {
       resetColors();
       $("#five").addClass("red");
       $("#two, #three").addClass("green");
      }

      else if (m > 25 && m <= 30) {
       resetColors();
       $("#five").addClass("red");
       $("#one1, #two, #three").addClass("green");
      }

      else if (m > 30 && m <= 35) {
       resetColors();
       $("#five").addClass("red");
       $("#one1, #one2, #two, #three").addClass("green");
      }

      else if (m > 35 && m <= 40) {
       resetColors();
       $("#two").addClass("red");
       $("#five").addClass("green");
       $("#three").addClass("blue");
      }

      else if (m > 40 && m <= 45) {
       resetColors();
       $("#two").addClass("red");
       $("#one1, #five").addClass("green");
       $("#three").addClass("blue");
      }

      else if (m > 45 && m <= 50) {
       resetColors();
       $("#two").addClass("red");
       $("#one1, #one2, #five").addClass("green");
       $("#three").addClass("blue");
      }

      else if (m > 50 && m <= 55) {
       resetColors();
       $("#one1").addClass("red");
       $("#two, #five").addClass("green");
       $("#one2, #three").addClass("blue");
      }

      else if (m > 55 && m <= 59) {
       $("#one1, #five").addClass("red");
      }
      break;


    case 18 :

      resetColors();
      $("#one1, #five").addClass("red");

      if (m > 0 && m <= 5) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#one2").addClass("green");
      }

      else if (m > 5 && m <= 10) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#two").addClass("green");
      }

      else if (m > 10 && m <= 15) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#three").addClass("green");
      }

      else if (m > 15 && m <= 20) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#one2, #three").addClass("green");
      }

      else if (m > 20 && m <= 25) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#two, #three").addClass("green");
      }

      else if (m > 25 && m <= 30) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#one2, #two, #three").addClass("green");
      }

      else if (m > 30 && m <= 35) {
        resetColors();
        $("#one1").addClass("red");
        $("#two").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 35 && m <= 40) {
        resetColors();
        $("#one1").addClass("red");
        $("#three").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 40 && m <= 45) {
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #three").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 45 && m <= 50) {
        resetColors();
        $("#one1").addClass("red");
        $("#two, #three").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 50 && m <= 55) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#two, #one2, #three").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 55 && m <= 59) {
        resetColors();
        $("#two, #five").addClass("red");
      }
      break;


    case 19 :

      resetColors();
      $("#two, #five").addClass("red");

      if( m > 0 && m <= 5){
        resetColors();
        $("#two, #five").addClass("red");
        $("#one1").addClass("green");
      }

      else if( m > 5 && m <= 10){
        resetColors();
        $("#two, #five").addClass("red");
        $("#one1, #one2").addClass("green");
      }

      else if(m > 10 && m <= 15){
        resetColors();
        $("#two, #five").addClass("red");
        $("#three").addClass("green");
      }

      else if(m > 15 && m <= 20){
        resetColors();
        $("#two, #five").addClass("red");
        $("#one1, #three").addClass("green");
      }

      else if(m > 20 && m <= 25){
        resetColors();
        $("#five").addClass("red");
        $("#three").addClass("green");
        $("#two").addClass("blue");
      }

      else if(m > 25 && m <= 30){
        resetColors();
        $("#five").addClass("red");
        $("#two").addClass("blue");
        $("#one1, #three").addClass("green");
      }

      else if (m > 30 && m <= 35){
        resetColors();
        $("#five").addClass("red");
        $("#two").addClass("blue");
        $("#one1, #one2, #three").addClass("green");
      }

      else if(m > 35 && m <= 40){
        resetColors();
        $("#five").addClass("blue");
        $("#two").addClass("red");
        $("#three").addClass("green");
      }

      else if(m > 40 && m <= 45){
        resetColors();
        $("#five").addClass("blue");
        $("#two").addClass("red");
        $("#one1, #three").addClass("green");
      }

      else if(m > 45 && m <= 50){
        resetColors();
        $("#five").addClass("blue");
        $("#two").addClass("red");
        $("#one1, #one2, #three").addClass("green");
      }

      else if(m > 50 && m <= 55){
        resetColors();
        $("#one1").addClass("red");
        $("#two, #three").addClass("green");
        $("#one2, #five").addClass("blue");
      }

      else if(m > 55 && m <= 59){
        resetColors();
        $("#three, #five").addClass("red");
      }
      break;

    case 20 :

      resetColors();
      $("#three, #five").addClass("red");

      if(m > 0 && m <= 5){
        resetColors();
        $("#three, #five").addClass("red");
        $("#one1").addClass("green");
      }

      else if(m > 5 && m <= 10){
        resetColors();
        $("#three, #five").addClass("red");
        $("#two").addClass("green");
      }

      else if(m > 10 && m <= 15){
        resetColors();
        $("#three, #five").addClass("red");
        $("#one1, #two").addClass("green");
      }

      else if(m > 15 && m <= 20){
        resetColors();
        $("#three, #five").addClass("red");
        $("#one1, #one2, #two").addClass("green");
      }

      else if(m > 20 && m <= 25){
        resetColors();
        $("#five").addClass("red");
        $("#two").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 25 && m <= 30){
        resetColors();
        $("#three").addClass("red");
        $("#one1").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 30 && m <= 35){
        resetColors();
        $("#three").addClass("red");
        $("#two").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 35 && m <= 40){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #two").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 40 && m <= 45){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #one2, #two").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 45 && m <= 50){
        resetColors();
        $("#three").addClass("red");
        $("#one1, #one2, #two").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 50 && m <= 55){
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #three").addClass("green");
        $("#two, #five").addClass("blue");
      }

      else if(m > 55 && m <= 59){
        $("#one1, #three, #five").addClass("red");
      }
      break;

    case 21 :

      resetColors();
      $("#one1, #three, #five").addClass("red");

      if (m > 0 && m <= 5) {
        resetColors();
        $("#one1, #three, #five").addClass("red");
        $("#one2").addClass("green");
      }

      else if (m > 5 && m <= 10) {
        resetColors();
        $("#one1, #three, #five").addClass("red");
        $("#two").addClass("green");
      }

      else if (m > 10 && m <= 15) {
        resetColors();
        $("#one1, #three, #five").addClass("red");
        $("#one2, #two").addClass("green");
      }

      else if (m > 15 && m <= 20) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#one2").addClass("green");
        $("#three").addClass("blue");
      }

      else if (m > 20 && m <= 25) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#two").addClass("green");
        $("#three").addClass("blue");
      }

      else if (m > 25 && m <= 30) {
        resetColors();
        $("#one1, #three").addClass("red");
        $("#one2").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 30 && m <= 35) {
        resetColors();
        $("#one1, #three").addClass("red");
        $("#two").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 35 && m <= 40) {
        resetColors();
        $("#one1, #three").addClass("red");
        $("#one2, #two").addClass("green");
        $("#five").addClass("blue");
      }

      else if (m > 40 && m <= 45) {
        resetColors();
        $("#one1").addClass("red");
        $("#one2").addClass("green");
        $("#three, #five").addClass("blue");
      }

      else if (m > 45 && m <= 50) {
        resetColors();
        $("#one1").addClass("red");
        $("#two").addClass("green");
        $("#three, #five").addClass("blue");
      }

      else if (m > 50 && m <= 55) {
        resetColors();
        $("#one1").addClass("red");
        $("#one2, #two").addClass("green");
        $("#three, #five").addClass("blue");
      }

      else if(m > 55 && m <= 59) {
        resetColors();
        $("#two, #three, #five").addClass("red");
      }
      break;

    case 22 :

      resetColors();
      $("#two, #three, #five").addClass("red");

      if(m > 0 && m <= 5){
        resetColors();
        $("#two, #three, #five").addClass("red");
        $("#one1").addClass("green");
      }

      else if(m > 5 && m <= 10){
        resetColors();
        $("#two, #three, #five").addClass("red");
        $("#one1,#one2").addClass("green");
      }

      else if(m > 10 && m <= 15){
        resetColors();
        $("#three, #five").addClass("red");
        $("#one1").addClass("green");
        $("#two").addClass("blue");
      }

      else if(m > 15 && m <= 20){
        resetColors();
        $("#two, #five").addClass("red");
        $("#one1").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 20 && m <= 25){
        resetColors();
        $("#two, #five").addClass("red");
        $("#one1,#one2").addClass("green");
        $("#three").addClass("blue");
      }

      else if(m > 25 && m <= 30){
        resetColors();
        $("#two, #three").addClass("red");
        $("#one1").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 30 && m <= 35){
        resetColors();
        $("#two, #three").addClass("red");
        $("#one1,#one2").addClass("green");
        $("#five").addClass("blue");
      }

      else if(m > 35 && m <= 40){
        resetColors();
        $("#three").addClass("red");
        $("#one1").addClass("green");
        $("#two,#five").addClass("blue");
      }

      else if(m > 40 && m <= 45){
        resetColors();
        $("#two").addClass("red");
        $("#one1").addClass("green");
        $("#three,#five").addClass("blue");
      }

      else if(m > 45 && m <= 50){
        resetColors();
        $("#two").addClass("red");
        $("#one1,#one2").addClass("green");
        $("#three,#five").addClass("blue");
      }

      else if(m > 50 && m <= 55){
        resetColors();
        $("#one1").addClass("red");
        $("#two").addClass("green");
        $("#one2, #three, #five").addClass("blue");
      }

      else if(m > 55 && m <= 59){
        $("#one1,#two,#three,#five").addClass("red");
      }
      break;

    case 23 :

      resetColors();
      $("#one1, #two, #three, #five").addClass("red");

      if (m > 0 && m <= 5) {
        resetColors();
        $("#one1, #two, #three, #five").addClass("red");
        $("#one2").addClass("green");
      }

      else if (m > 5 && m <= 10) {
        resetColors();
        $("#two, #three, #five").addClass("red");
        $("#one2").addClass("green");
        $("#one1").addClass("blue");
      }

      else if (m > 10 && m <= 15) {
        resetColors();
        $("#one1, #three, #five").addClass("red");
        $("#one2").addClass("green");
        $("#two").addClass("blue");
      }

      else if (m > 15 && m <= 20) {
        resetColors();
        $("#one1, #three, #five").addClass("red");
        $("#one2").addClass("green");
        $("#two").addClass("blue");
      }

      else if (m > 20 && m <= 25) {
        resetColors();
        $("#two, #five").addClass("red");
        $("#one2").addClass("green");
        $("#one1, #three").addClass("blue");
      }

      else if (m > 25 && m <= 30) {
        resetColors();
        $("#one1, #five").addClass("red");
        $("#one2").addClass("green");
        $("#two, #three").addClass("blue");
      }

      else if (m > 30 && m <= 35) {
        resetColors();
        $("#two, #three").addClass("red");
        $("#one2").addClass("green");
        $("#one1, #five").addClass("blue");
      }

      else if (m > 35 && m <= 40) {
        resetColors();
        $("#one1, #three").addClass("red");
        $("#one2").addClass("green");
        $("#two, #five").addClass("blue");
      }

      else if (m > 40 && m <= 45) {
        resetColors();
        $("#one1, #two").addClass("red");
        $("#one2").addClass("green");
        $("#three, #five").addClass("blue");
      }

      else if (m > 45 && m <= 50) {
        resetColors();
        $("#two").addClass("red");
        $("#one2").addClass("green");
        $("#one1, #three, #five").addClass("blue");
      }

      else if (m > 50 && m <= 55) {
        resetColors();
        $("#one1").addClass("red");
        $("#one2").addClass("green");
        $("#two, #three, #five").addClass("blue");
      }

      else if (m > 55 && m <= 59) {
        $("#one1, #one2, #two, #three, #five").addClass("red");
      }
      break;

    default:
      console.log("something wrong with 1st switch");
  }
};

var resetColors =  function(){
  $("#one1, #one2, #two, #three, #five").removeClass("red");
  $("#one1, #one2, #two, #three, #five").removeClass("green");
  $("#one1, #one2, #two, #three, #five").removeClass("blue");
};

// Snippet for testing
/**
var hh = 0, mm = 0;
setInterval(function(){
  setHours(hh,mm);
  mm = mm+5;
  if(mm > 55){
    hh++;
    mm = 0;
    if(hh > 23){
      hh = 0;
    }
  }
  console.log(hh,mm-5);
},5000);

**/

if(firstTime){
setHours(firstHour,firstMinute);
firstTime = false;
}

var updateTime = function(){
 var x = new Date();
 hrs = x.getHours();
 mins = x.getMinutes();
 setHours(hrs,mins);
};

setInterval(function(){
updateTime();
console.log(mins);
},3000);
