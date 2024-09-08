// // 1. Write a program that take two numbers & add them in a
// // new variable. Show the result in your browser.

var num1 = 5;
var num2 = 3;
 var add = num1  +  num2;
document.write( " add of " + num1 + " and " + num2 + " is: "+ add + "</br>" );

// // 2. Repeat task1 for subtraction, multiplication, division &
// // modulus.

var num1 = 5;
var num2 = 3;

var sub = num1 - num2;
document.write("sub of " + num1 + " by " + num2 + " is: " + sub +"</br>");

var multiplication = num1 * num2;
document.write(" multiplication of " + num1 + " by " + num2 + " is: " + multiplication +"</br>");

var division = num1 /num2;
document.write(" division of " + num1 + " by " + num2 + " is: " + division +"</br>");

var modulus= num1% num2;
document.write(" modulus of " + num1 + " by " + num2 + " is: " + modulus +"</br>");

// 3. Do the following using JS Mathematic Expressions

var value;
document.write("Value after variable declaration is: " + value + "</br>");

var value1= 5;
document.write("Initial value" + value1+"</br>");

document.write("value after increment"+ ++value1+"</br>");

value1=value1+7;
document.write("value after addition is:"+ value1+"</br>");
document.write("value after decrement is :" + --value1 + "</br>");

value1=value1%3;
document.write("The remainder is : " + value1+ "</br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.

var ticket=600;
var buying=5

totalcost=(ticket*buying);
document.write("Total cost to buy " + buying + " tickets "+ " to a movie is " + totalcost + " PKR" + "</br>");

//table

var table=prompt("Enter a number of any table");
var count=1;
var inc=1;

document.write(
    table + "x"+ count++ + " = " + table*inc++ + "</br>" +
    table + "x"+ count++ + " = " + table*inc++ + "</br>" +
    table + "x"+ count++ + " = " + table*inc++ + "</br>" +
    table + "x"+ count++ + " = " + table*inc++ + "</br>" +
    table + "x"+ count++ + " = " + table*inc++ + "</br>" +
    table + "x"+ count++ + " = " + table*inc++ + "</br>" +
    table + "x"+ count++ + " = " + table*inc++ + "</br>" +
    table + "x"+ count++ + " = " + table*inc++ + "</br>" +
    table + "x"+ count++ + " = " + table*inc++ + "</br>" +
    table + "x"+ count++ + " = " + table*inc++ + "</br>" );

    //a. Store a Celsius temperature into a variable.

    var Celsius=25;
    var Farenheit=65;

    var valueCelsius=(Farenheit - 32) * (5/9);
    var valueFarenheit=(Celsius* 9/5) + (32);

    document.write(Celsius + " C " + "is" + valueFarenheit +"F" + "</br>");
    document.write(Farenheit + " F " + "is" + valueCelsius + "C"+ "</br>");
 var product1="Price of item 1";
 var product2="Price of item 2";
 var order1="Ordered quantity of item 1";
 var order2="Ordered quantity of item 2";
 var shipping="Shipping charges";

 var total=650*3 + 100*7 + 100;

 

 document.write(product1 + " is " + "650" + "</br>" +
 order1 + " is " + "3" + "</br>"+ 
 product2 + " is " + "100" + "</br>" +
 order2 + " is " + "7" + "</br>" +
 shipping + " is " + "100" + "</br>" +
 "Total cost of your order is" + total );


 document.write(
 "<h1>" +  "Mark Sheet" + "</h1> ");

 var totalmarks=980;
 
 var Marksobtained=804;

 var percentage=(Marksobtained/totalmarks)*100;

 document.write("Total marks:" + totalmarks + "</br>"+
    "Marks obtained:" + Marksobtained + "</br>" +
    "Percentage :" + percentage + "</br>" );
 

    var dollars=10;
    var riyals=25;
   var totalcurrency=10*104.80 + 25*28; 

   document.write("<h1>"+ " Currency in PKR"+ "</h1>" + "</br>" +
   "Total Currecncy in PKR: " + totalcurrency + "<br>");


   var num=5;

   document.write(num+5 + " <br>" + num*10 + "<br>" + num/2 );
   

   var currentyear=2016;
   var birthyear=1992;
   var yourage=2016-1992;

   document.write("<h1>" + "Age Calculator" + "</h1>" + "Current Year: "+ currentyear + "<br>" + 
    "Birth Year:" +  birthyear + "<br>" +
    "Your Age :" + yourage + "<br>" );                               
   

    var radius=20;
    cicumference=(2*3.142*radius);
    var area=(3.142*radius*2);

    document.write("Radius of a circle is" + radius + " </br>" +
        "The circumference is" + cicumference + "</br>" +
        "The area is " + area + " </br>");

        document.write("<h1>" + "The Lifetime Supply Calculator" + "</h1>");

        var favsnack=" chocolate chip ";
        var currentage=15;
        var maxage=65;
        var perday=3;
        var total=(65-15)*3;

        document.write("Favourite Snack:"  + favsnack + " </br>" +
            "Current Age : " + currentage + "</br>" +
            " Estimated Maximum Age : " + maxage + "</br>" +
            "Amount of snacks perday: " + perday + " </br>"+ 
            "You will need " + total + favsnack + " to last you until the ripe old age of " + maxage );


        


    



 
 