// Q#1
var number=prompt("enter decimal value")
document.write("Number value"+number+"<br>Ceil value<br>")
document.write(Math.ceil(number))
document.write("<br>Rounded value<br>")
document.write(Math.round(number))
document.write("<br>Floor value<br>")
document.write(Math.floor(number))
document.write("<br><br>")

// Q#2
var number=prompt("enter decimal value")
document.write("Negative floating points -"+number+"<br>Ceil value<br>-")
document.write(Math.ceil(number))
document.write("<br>Rounded value<br>-")
document.write(Math.round(number))
document.write("<br>Floor value<br>-")
document.write(Math.floor(number))

// Q#3
var number=+prompt("Enter Absolute value")
document.write(Math.abs(number))

document.write("<br>")
// Q#4
var number=prompt("Enter value");
var Toss="";
for(var i=0;i<2;i++){
    var code=Math.floor(Math.random()*number.length)
    Toss+=number[code]
}
document.write(Toss)
// var Toss= prompt("Enter a dice")
// var dice=""
// for(var i=0 ;i>10;i++){
// var convert=Math.floor(Math.random()*Toss.length)
//     dice += Toss[convert]
// }
// document.write(dice)

document.write("<br>")

// Q#5
var Head=prompt("Head user enter your name")
var Tail=prompt("Tail user enter your name")
var updateHead=Head.toUpperCase()
var updateTail=Tail.toUpperCase()

var Toss=Math.random()*2
var convert=Math.floor(Math.random(Toss))
if (convert===0){
    document.write(updateHead+"\n USer Win The Toss")
}
else{
    document.write(updateTail+"\n User win the Toss")
}

document.write("<br>")

// Q#6
var number=Math.round(Math.random()*100)
console.log(number)

document.write("<br>")
// Q#7
alert("lets play a game")
var number=prompt("enter a number between 1 to 10")
var correct="5"
if(number === correct){
    alert("congrats you find out correct number")
}
else{
    alert(number+"its not a correct number")
}
