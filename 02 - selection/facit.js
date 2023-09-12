/**
 * Övning 1: Enkel If-sats

**/
let x = 12;
if (x > 10) {
    console.log("x är större än 10");
}


//Övning 2: If-Else

let y = 7;
if (y % 2 === 0) {
    console.log("y är ett jämnt tal");
} else {
    console.log("y är ett udda tal");
}

//Övning 3: Else-If


let z = -5;
if (z > 0) {
    console.log("z är ett positivt tal");
} else if (z < 0) {
    console.log("z är ett negativt tal");
} else {
    console.log("z är noll");
}

//Övning 4: Använd Ternära Operatorn

let a = -8;
const message = a > 0 ? "a är positivt" : "a är negativt eller noll";
console.log(message);

//Övning 5: Logiska Operatorer

let isSunny = true;
let isWarm = true;
if (isSunny && isWarm) {
    console.log("Det är soligt och varmt!");
}

//Övning 6: Switch-sats

let dayOfWeek = "Onsdag";
switch (dayOfWeek) {
    case "Måndag":
        console.log("Det är måndag.");
        break;
    case "Tisdag":
        console.log("Det är tisdag.");
        break;
    case "Onsdag":
        console.log("Det är onsdag.");
        break;
    default:
        console.log("Okänt val.");
}

//Övning 7: Använd Fallgenomgång (Switch)

let score = 88;
let grade;
switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}
console.log("Betyg: " + grade);

//Övning 8: Nestlade Villkor

let age = 25;
if (age < 18) {
    console.log("Du är under 18 år.");
} else if (age >= 18 && age <= 65) {
    console.log("Du är mellan 18 och 65 år.");
} else {
    console.log("Du är över 65 år.");
}

/**Övning 9: Använd Default (Switch)
Facit är samma som för övning 6, eftersom det redan inkluderade en default-sektion.
*/


//Övning 10: Använd Logiska Operatorer (Switch)

switch (dayOfWeek) {
    case "Lördag":
    case "Söndag":
        console.log("Det är helg!");
        break;
    default:
        console.log("Det är inte helg.");
}
