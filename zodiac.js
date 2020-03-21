let zodDateObj = document.getElementById('zodDate');
//let junk= document.getElementById 
let showMeObj = document.getElementById('showMe');


document.getElementById('help').addEventListener("click", function () {
    alert("Enter your birthday to find out your zodiac!")
});

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


    // sounds  
    const soundButtons = document.querySelectorAll('.soundtrack');
    const soundStopButton = document.getElementById('btn-stop-sounds');
    const speakers = document.getElementById('speakers');

    //sign selection


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

let capObj = document.getElementById('capr');
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
        speakers.src = `sounds/capr.mp3`;
        speakers.play();
        document.getElementById("zodiacName").innerHTML = "The Sun";
        document.getElementById("zodiacDesc").innerHTML =
            "Being our most powerful force, the center of our solar system, gives you the confidence and stamina to take charge of your life as well as your emotions. You strive on being the leader, and excel when your talents are recognized and admired.g";



    } else if (whichOne == 2) {


        heroObj.src = 'img/mercury.png';
        speakers.src = `sounds/sag.mp3`;
        speakers.play();
        document.getElementById("zodiacName").innerHTML = "Mercury";
        document.getElementById("zodiacDesc").innerHTML =
            "The planet of communication. You are an intellectual being, emotionally reserved and have a strong sense of self. However, you do have a tendency to over analyze and get too caught up in petty details that can distract your attention from the big picture and how you feel at a heart level";


    } else if (whichOne == 3) {

        heroObj.src = 'img/venus.png';
        speakers.src = `sounds/sco.mp3`;
        speakers.play();

        document.getElementById("zodiacName").innerHTML = "Venus";
        document.getElementById("zodiacDesc").innerHTML =
            "Venus, lover of all things beautiful. This vibrates also influences your inner mood making you a sensitive and caring person, which means you are well liked but can be taken advantage of. When in love, you give your all, but expect the same back. And if you feel suspicious of your partner, you can be possessive and controlling.";


    } else if (whichOne == 4) {

        heroObj.src = 'img/earth.png';
        speakers.src = `sounds/lib.mp3`;
        speakers.play();

        document.getElementById("zodiacName").innerHTML = "Earth";
        document.getElementById("zodiacDesc").innerHTML =
            "Earth is wise, stable, sensual, and, grounded. You rule the physical world, which is why you make great gardeners, cooks, and lovers. Because the element earth is so reliable, you are a trustworthy business person and professional.";

    } else if (whichOne == 5) {

        heroObj.src = 'img/mars.png';
        speakers.src = `sounds/vir.mp3`;
        speakers.play();

        document.getElementById("zodiacName").innerHTML = "Mars";
        document.getElementById("zodiacDesc").innerHTML =
            "Mars, the strong-minded planet. The energy can either be motivating and assertive or determined and aggressive. The influence of Mars can make you impulsive, intense and quick to act and overreact.";

    } else if (whichOne == 6) {

        heroObj.src = 'img/jupiter.png';
        speakers.src = `sounds/leo.mp3`;
        speakers.play();

        document.getElementById("zodiacName").innerHTML = "Jupiter";
        document.getElementById("zodiacDesc").innerHTML =
            "Jupiter, the planet of wisdom and expansion. Your emotions are heightened with the spirit of adventure, a thirst for knowledge and a desire to explore different belief systems.";

    } else if (whichOne == 7) {

        heroObj.src = 'img/saturn.png';
        speakers.src = `sounds/can.mp3`;
        speakers.play();

        document.getElementById("zodiacName").innerHTML = "Saturn";
        document.getElementById("zodiacDesc").innerHTML =
            "Saturn, the teacher and planet of reality. It influences your inner mood with a no-nonsense, driven and solitary quality. To keep your emotions equalized, you need a decompressing time between your busy schedule and before mingling with others in the outer world. But it is important not to stay in solitude for too long so you avoid entering the space of the saturnine blues.";

    } else if (whichOne == 8) {

        heroObj.src = 'img/uranus.png';
        speakers.src = `sounds/gem.mp3`;
        speakers.play();
        document.getElementById("zodiacName").innerHTML = "Uranus";
        document.getElementById("zodiacDesc").innerHTML =
            "Uranus, planet of independence and innovation. Your ruler, permeates your mood with individuality and a refusal to walk in anyone else's shoes. You are a trailblazer, and as such, can be in your own world, leaving others to think you are standoffish, when really, you are just sorting things out in your mind.";

    } else if (whichOne == 9) {

        heroObj.src = 'img/neptune.png';
        speakers.src = `sounds/tau.mp3`;
        speakers.play();
        document.getElementById("zodiacName").innerHTML = "Neptune";
        document.getElementById("zodiacDesc").innerHTML =
            "Neptune, planet of inspiration and compassion. It influences your emotions with profound sensitivity and empathy. A spiritual connection and a practice of meditative silence that allows you to access your dreams and imagination will keep your emotions in check. And a balance between escapism and reality is what helps you to be affective in the world.";

    } else if (whichOne == 10) {

        heroObj.src = 'img/pluto.png';
        speakers.src = `sounds/ari.mp3`;
        speakers.play();

        document.getElementById("zodiacName").innerHTML = "Pluto";
        document.getElementById("zodiacDesc").innerHTML =
            " Pluto, the planet of transformation, influences your inner world with intensity, power and the desire to probe to the very depths, for truth. Emotional fulfillment lies in honest connections with others that include strong, sensitive and passionate expression.";

    } else if (whichOne == 11) {

        heroObj.src = 'img/quasar.png';
        speakers.src = `sounds/pis.mp3`;
        speakers.play();
        document.getElementById("zodiacName").innerHTML = "A Quasar";
        document.getElementById("zodiacDesc").innerHTML =
            "which makes you a highly sensitive and emotional being. As a Quasar is in constant flux, this constant change can also make you somewhat moody. You operate by your feelings, and even if something logically looks sound, you will rarely go against how you feel, and can make decisions based purely on instincts. ";

    } else if (whichOne == 12) {

        heroObj.src = 'img/black_hole.png';
        speakers.src = `sounds/aqu.mp3`;
        speakers.play();

        document.getElementById("zodiacName").innerHTML = "The Void";
        document.getElementById("zodiacDesc").innerHTML =
            "The void embodies intense focus and personal magnetism or ability to attract. the startling, stunning turn of events in the twinkling of an eye, where old conditions disappear and a new reality is birthed. During volatile change, you reach a void state where new inspiration and grace can enter your life.";

    } else {

        console.log('Error in swapZodInfo');


    }
}
