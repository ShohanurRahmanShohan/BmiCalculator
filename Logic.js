function cal(){
   var  hight = prompt (" Your hight in inches ? " ) ; 
   var weight= prompt (" Your weight in kg ? ");
   var c = hight/12
   var i = c/3.2808399
   var h = i*i
   var num1 = weight/h ;
   var num = num1.toFixed(2)
     if (num < 18.5){
       document.getElementById("aw").innerHTML = "Underweight ~"+num + " :     A BMI of less than 18.5 indicates that you are underweight, so you may need to put on some weight. You are recommended to ask your doctor or a dietitian for advice.";
      }
      else if (num >= 18.5 && num <= 24.9  ) {
         document.getElementById("aw").innerHTML = "Ideal ~"+num + "   :  A BMI of 18.5–24.9 indicates that you are at a healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing serious health problems.";
      }
      else if (num >= 25 && num <= 29.9 ) {
          document.getElementById("aw").innerHTML = "Overweight ~" +num + "      : A BMI of 25–29.9 indicates that you are slightly overweight. You may be advised to lose some weight for health reasons. You are recommended to talk to your doctor or a dietitian for advice.";
      }
      else {
           document.getElementById("aw").innerHTML ="Ndicatess obesity ~" +num +  "        : A BMI of over 30 indicates that you are heavily overweight. Your health may be at risk if you do not lose weight. You are recommended to talk to your doctor or a dietitian for advice.";
      }
}
function fh(){
  var hi= prompt ("feet : ");
   var cod1 = hi*12;
   var cod = cod1.toFixed(2);
  document.getElementById("ff").innerHTML = "~"+ cod + `inc`;
}
function r (){
  document.getElementById("ff").innerHTML = " ";
  document.getElementById("aw").innerHTML = "CLICK THE START FOR START YOUR BMI HERE AND SOME GOOD ADVISE FOR YOU";
}
