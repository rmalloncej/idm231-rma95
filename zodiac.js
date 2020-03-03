// Show/Hide Zodiac Text
function showZodiac() {
    var x = document.getElementById("showMe");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


let zodDateObj = document.getElementById('zodDate');
//let junk= document.getElementById
let showMeObj = document.getElementById('showMe');

function computeZod() {

    let userBday = zodDateObj.value;
    console.log('userBday is ' + userBday);
    //1964-11-09
    let monStr = userBday.substr(5, 2);
    let dayStr = userBday.substr(8, 2);
    // convert string to number 
    let monNum = parseInt(monStr);
    let dayNum = parseInt(dayStr);


    console.log('monNum = ' + monNum);
    console.log('dayNum= ' + dayNum);

    /* if (monStr = ' ')
    if (isNaN(monNum)) {

        console.log('WRONGGGGGGG');
    } 
    */


    showMeObj.innerHTML = dateToZodiac(monNum, dayNum);
}

function dateToZodiac(whichMonth, whichDayOfMonth) {

    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Cap";
        swapZodInfo(1);

    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "Sag";
        swapZodInfo(2);

    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "Sco";
        swapZodInfo(3);

    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "Lib";
        swapZodInfo(4);

    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "Vir";
        swapZodInfo(5);

    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "Leo";
        swapZodInfo(6);

    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "Can";
        swapZodInfo(7);

    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "Gem";
        swapZodInfo(8);

    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "Tau";
        swapZodInfo(9);

    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "Ari";
        swapZodInfo(10);

    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "Pis";
        swapZodInfo(11);

    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "Aqu";
        swapZodInfo(12);

    } else {
        AstroSign = 'Invalid Date'
    }

    return AstroSign;

}

// Cycle Images & Descriptions 

let heroObj = document.getElementById('hero');

let capObj = document.getElementById('cap');
let sagObj = document.getElementById('sag');
let scoObj = document.getElementById('sco');
let libObj = document.getElementById('lib');
let virObj = document.getElementById('vir');
let leoObj = document.getElementById('leo');
let canObj = document.getElementById('can');
let gemObj = document.getElementById('gem');
let tauObj = document.getElementById('tau');
let ariObj = document.getElementById('ari');
let pisObj = document.getElementById('pis');
let aquObj = document.getElementById('aqu');



capObj.addEventListener('click', function () {

    swapZodInfo(1);

}, false);
sagObj.addEventListener('click', function () {

    swapZodInfo(2);

}, false);
scoObj.addEventListener('click', function () {

    swapZodInfo(3);

}, false);
libObj.addEventListener('click', function () {

    swapZodInfo(4);

}, false);
virObj.addEventListener('click', function () {

    swapZodInfo(5);

}, false);
leoObj.addEventListener('click', function () {

    swapZodInfo(6);

}, false);
canObj.addEventListener('click', function () {

    swapZodInfo(7);

}, false);
gemObj.addEventListener('click', function () {

    swapZodInfo(8);

}, false);
tauObj.addEventListener('click', function () {

    swapZodInfo(9);

}, false);
ariObj.addEventListener('click', function () {

    swapZodInfo(10);

}, false);
pisObj.addEventListener('click', function () {

    swapZodInfo(11);

}, false);
aquObj.addEventListener('click', function () {

    swapZodInfo(12);

}, false);

function swapZodInfo(whichOne) {
    console.log('swap zod info called ' + whichOne);
    // swap out zodiac image 
    //swap 
    //  

    if (whichOne == 1) {

        heroObj.src = 'img/sun.png';

    } else if (whichOne == 2) {


        heroObj.src = 'img/mercury.png';


    } else if (whichOne == 3) {

        heroObj.src = 'img/venus.png';

    } else if (whichOne == 4) {

        heroObj.src = 'img/earth.png';

    } else if (whichOne == 5) {

        heroObj.src = 'img/mars.png';

    } else if (whichOne == 6) {

        heroObj.src = 'img/jupiter.png';

    } else if (whichOne == 7) {

        heroObj.src = 'img/saturn.png';

    } else if (whichOne == 8) {

        heroObj.src = 'img/uranus.png';

    } else if (whichOne == 9) {

        heroObj.src = 'img/neptune.png';

    } else if (whichOne == 10) {

        heroObj.src = 'img/pluto.png';

    } else if (whichOne == 11) {

        heroObj.src = 'img/quasar.png';

    } else if (whichOne == 12) {

        heroObj.src = 'img/black_hole.png';

    } else {

        console.log('Error in swapZodInfo');
    }
}
