//Answer 2

let teamMembers = ["aSafeSquare","Rhema","Victor","Micheal","Edward","Precious","Martha"];

console.log(teamMembers[4]);

//Answer 3

let aboutMe = {
    firstName:'Edward',
    lastName: 'Ogunwole',
    bestMovie: 'Miracle in cell no 7',
    bestFood: 'Yam and egg sauce',
    complexion: 'Chocolate',
    birthMonth: 'November',
    state: 'Osun',
    groupName: 'Team hercules'
}

console.log(aboutMe.bestMovie);

//Answer 4

let noun = "dog";
let verb = "barked";
let adjective = "brown";

console.log("My "+adjective +" " + noun +" " + "seem to understand my limitations, and always keep close beside me when I am alone.");
console.log("I couldn't sleep because the neighbor's " + noun + " " + verb + " " + "all night.");
console.log("The " + adjective+ " " + noun + " " + "is very cautious while sleeping, it wake up at the slightest movement." );
console.log("Not that one ! " + "The"+" "+ adjective+ " "+ noun+ " " + verb);
console.log("And the " + noun + " "+ verb + " " + "two times in a low voice");


//Answer 5

alert("Welcome to Task 6")

let numerator = prompt("Enter the first number:");
let denominator = prompt("Enter the second number:");

let answer = remainder(numerator,denominator);

function remainder (numerator,denominator){
    return numerator % denominator;
}
console.log(remainder = " + answer");

//Answer 6
alert("Question 6");

let b = prompt("Enter value [b]:");
let c = prompt("Enter value [c]:");

function solve(a,b,c){
    a = prompt('what is a ?');
    b = prompt('what is b ?');
    c = prompt('what is c ?');

    let result = (((-b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    let result2 = (((-b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    return "Your Question 6 answers are" +" "+ result + " " + "and" + " " + result2;
}
console.log(solve());


//Answer 7

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = " When" + " " + "a" +" "+myAdjective + " " + "leopard"+ " " + "appeared"+ " "+"my"+" " + myNoun + " " + myVerb + " " + myAdverb;

console.log(wordBlanks);

//Answer 8

const pi = 3.142;

let r = 9;

function circleArea(){
    return pi*(Math.pow(9,2));
}

console.log(Math.ceil(circleArea()));

//Answer 9

let P = 8200;
let R = 17.5;
let T = 2.5; 
let V = 100;
let S = (P*R*T)/V;

console.log('S.I= N ${S}');

//Answer 10

let x = 10;
let y = 4;

let z = x % y;

console.log(z);

//Answer 11

//Test Data 1

let meritWeight = 78;
let meritHeight = 1.69;
let nutJobWeight = 92;
let nutJobHeight = 1.95;

let meritBMI = meritWeight/(meritHeight*meritHeight);
console.log(`Merit's BMI = ${meritBMI}`);

let nutJobBMI = nutJobWeight/(nutJobHeight*nutJobHeight);
console.log(`NutJob's BMI = ${nutJobBMI}`);

//Test Data 2

let meritNewWeight = 85;
let meritNewHeight = 1.76;
let nutJobNewWeight = 95;
let nutJobNewHeight = 1.88;

let meritNewBMI = meritNewWeight/(meritNewHeight * meritNewHeight);
console.log(`Merit's New BMI = ${meritNewBMI}`);

let nutJobNewBMI= nutJobNewWeight/(nutJobNewHeight * nutJobNewHeight);
console.log(`NutJob's New BMI = ${nutJobNewBMI}`);

const meritHigherBMI = meritBMI > nutJobBMI && meritNewBMI > nutJobNewBMI;
console.log(meritHigherBMI);