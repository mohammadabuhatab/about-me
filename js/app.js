'use strict';
let grade =0;
alert('Lets play a small game I will ask you some questions about my self And lets see how the percentage of your correct expectations will be')
let gendar = prompt('Do you think I am a male or female ?');
let study = prompt('Do you think I finished my high School or not ?');
let sport = prompt('Do you think I like sports or not ?');
let rain = prompt('Do you think I like a rain or not ?');
let reading = prompt('Do you think I like reading or not ?');

if (gendar.toLowerCase()=== 'male'){
grade=grade+1;
document.write('<p>I am so glad because I am a man </p>')
document.write ("<img src='images/men-vs-women-jpg.jpeg'>");
}
else{
    document.write('<p>thanks for god because I am not a female,</br> I am just lauging but actualy I am a male</p>')
    document.write ("<img src='images/men-vs-women-jpg.jpeg'>");
}
if (study.toLowerCase()=== 'yes' || study.toLowerCase()==='y'){
    grade=grade+1;
    document.write('<p>actualy i did my high school and also </br>i graduat from a BCs digree in mechatronics engineer</p>');
    document.write ("<img src='images/maxresdefault.jpg'>");}
else {
document.write('<p>  ops i did my high school not just that </br> and i graduating from uiversty</p>')
document.write ("<img src='images/maxresdefault.jpg'>");
}
if (sport.toLowerCase()=== 'yes' || sport.toLowerCase()==='y'){
    grade=grade+1;
    document.write('<p>sport in fact a very beautful and healthy thing </br>make sure to do it every day</p>')
    document.write ("<img src='images/sports.jpg'>");
}
else {
    document.write('<p> when you saw no ,</br> I think you imagin this photo</p>')
    document.write ("<img src='images/AR-191229829.jpg'>");
}
if (rain.toLowerCase()=== 'yes' || rain.toLowerCase()==='y'){
    grade=grade+1;
    document.write('<p>of cours I love raining </p>');
    document.write ("<img src='images/blog-rain-or-shine.jpg'>");
}
else {
    document.write('<p> is there any one did not like rain !!</p>')
    document.write ("<img src='images/driving-in-the-rain.jpg'>");
}
if (reading.toLowerCase()=== 'yes' || reading.toLowerCase()==='y'){
    grade=grade+1;
    document.write('<p> reading in fact is one of the most thinks i like</p>')
    document.write ("<img src='images/Blog-Reading-at-Home.jpg'>");
}
else {
    document.write('<p>   actualy I am not surprised but unlike usual</br> I like readings</p>')
    document.write ("<img src='images/rainbow-research-reading-blog-header.jpg'>");
}
console.log(grade);

switch (grade){
    case 1:
        document.write('<h5>you got 1/5 points in this game</h5>')
        break;
    case 2:
        document.write('<h5>you got 2/5 points in this game</h5>')

        break;    
    case 3:
        document.write('<h5>you got 3/5 points in this game</h5>')

         break;
    case 4:
        document.write('<h5>you got 4/5 points in this game</h5>')

        break;
    case 5:
        document.write('<h5>you got 5/5 points in this game</h5>')

           break;
     default:
        document.write('<h5>you didn`t answer any question true</h5>')

           break;
}
