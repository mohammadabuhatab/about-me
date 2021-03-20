'use strict';

let grade =0;   

function score(){
    alert ('correct');
    grade ++
}

function incorrect(){
    alert ('incorrect');
}


let i =1 ;

let fastFoud=['griled chiken','shawerma','hamburgur','fride chiken']
alert('Lets play a small game I will ask you some questions about my self And lets see how the percentage of your correct expectations will be')
let gendar = prompt('Do you think I am a male or female ?');

document.write('<h2>second part `visitor guess part`<h2>');
if (gendar.toLowerCase()=== 'male'){
score();
document.write('<p>I am so glad because I am a man </p>')
document.write ("<img src='images/men-vs-women-jpg.jpeg'>");
}
else{
    incorrect();
    document.write('<p>thanks for god because I am not a female,</br> I am just lauging but actualy I am a male</p>')
    document.write ("<img src='images/men-vs-women-jpg.jpeg'>");
}

let study = prompt('Do you think I finished my high School or not ?');
if (study.toLowerCase()=== 'yes' || study.toLowerCase()==='y'){
    score();
    document.write('<p>actualy i did my high school and also </br> i graduat from a BCs digree in mechatronics engineer</p>');
    document.write ("<img src='images/maxresdefault.jpg'>");}
else {
    incorrect();
    document.write('<p>  ops i did my high school not just that </br> and i graduating from uiversty</p>')
document.write ("<img src='images/maxresdefault.jpg'>");
}

let sport = prompt('Do you think I like sports or not ?');
if (sport.toLowerCase()=== 'yes' || sport.toLowerCase()==='y'){
    score();
    document.write('<p>sport in fact a very beautful and healthy thing </br>make sure to do it every day</p>')
    document.write ("<img src='images/sports.jpg'>");
}
else {
    incorrect();
    document.write('<p> when you saw no ,</br> I think you imagin this photo</p>')
    document.write ("<img src='images/AR-191229829.jpg'>");
}

let rain = prompt('Do you think I like a rain or not ?');
if (rain.toLowerCase()=== 'yes' || rain.toLowerCase()==='y'){
    score();
    document.write('<p>of cours I love raining </p>');
    document.write ("<img src='images/blog-rain-or-shine.jpg'>");
}
else {
    incorrect();
    document.write('<p> is there any one did not like rain !!</p>')
    document.write ("<img src='images/driving-in-the-rain.jpg'>");
}

let reading = prompt('Do you think I like reading or not ?');
if (reading.toLowerCase()=== 'yes' || reading.toLowerCase()==='y'){
    score();
    document.write('<p> reading in fact is one of the most thinks i like</p>')
    document.write ("<img src='images/Blog-Reading-at-Home.jpg'>");
}
else {
    incorrect();
    document.write('<p>   actualy I am not surprised but unlike usual</br> I like readings</p>')
    document.write ("<img src='images/rainbow-research-reading-blog-header.jpg'>");
}


let guises =prompt('now lets go to the second part of our game in this part you should gues a number between 0 and 100 , you have a 6 chanse');

while (guises!=15){
    i ++
    let x =6-i;
    if (i ==6){
        guises=15;
    
     }
     else{
if (guises>15){
    alert('your gues is higer')
    guises=prompt('try another number,you have another ' + x + ' chance');
    }
else{
    alert('your gues is lower')
    guises=prompt('try another number,you have another ' + x + ' chance');
    }
}}

switch (i) {
    case 1:
        grade=grade+1;
        document.write('<h6>great you gues the number from first try</h6>');
        break;
     case 2:
        grade=grade+1;
        document.write('<h6>great you gues the number from second try</h6>');
        break;
    case 3:
        grade=grade+1;
        document.write('<h6>great you gues the number from third try</h6>');
        break;
    case 4:
        grade=grade+1;
        document.write('<h6>great you gues the number from fourth try</h6>');
        break;
    case 5:
        grade=grade+1;
        document.write('<h6>great you gues the number from fifth try</h6>');
        break; 
    default:
        document.write('<h6>So sory you can`t gues the number</h6>');
        break;
}
let visitorChoesFood =prompt ('what do you think my favorite fast food ? for hent it is on of this ( ' + fastFoud+ ' )');
if (visitorChoesFood === 'shawerma')
{
    score();
}
else{
    alert('incorrect , my favorite fast food is shawerma'); 
}

switch (grade){
    case 1:
        document.write('<h5>you got 1/7 points in this game</h5><hr/>')

        break;
    case 2:
        document.write('<h5>you got 2/7 points in this game</h5><hr/>')

        break;    
    case 3:
        document.write('<h5>you got 3/7 points in this game</h5><hr/>')

         break;
    case 4:
        document.write('<h5>you got 4/7 points in this game</h5><hr/>')

        break;
    case 5:
        document.write('<h5>you got 5/7 points in this game</h5><hr/>')

           break;
    case 6:
        document.write('<h5>you got 6/7 points in this game</h5><hr/>')
        break;
    case 7:
        document.write('<h5>you got 7/7 points in this game</h5><hr/>')
        break;
     default:
        document.write('<h5>you didn`t answer any question true so you got 0/7</h5><hr/>')

           break;
}

