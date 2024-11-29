// Övning 1
let x = 11;
if (x > 10) {
  console.log(`x är större än 10`);
}

// 2
let y = 12;
if (y % 2 === 0) {
  console.log(`Nummret är en jämt nummer`);
} else if (y % 1 === 1) {
  console.log(`Nummret är udda`);
}

// 3
let z = 13;
if (z > 0) {
  console.log(`Z har ett positiv nummer`);
} else if (z < 0) {
  console.log(`Z har en negativ nummer`);
} else {
  console.log(`Z är 0`);
}

// 4
let a = -1;
a >= 0
  ? console.log(`A har ett positiv nummer`)
  : console.log(`A har en negativ nummer`);

// 5
let isSunny = true;
let isWarm = true;
if (isSunny && isWarm) {
  console.log(`Det är solig och varm`);
}

// 6
let dayOfWeek = 5;
switch (dayOfWeek) {
  case 1:
    console.log(`Det är måndag`);
    break;
  case 2:
    console.log(`Det är tisdag`);
    break;
  case 3:
    console.log(`Det är onsdag`);
    break;
  case 4:
    console.log(`Det är torsdag`);
    break;
  case 5:
    console.log(`Det är fredag`);
    break;
  case 6:
    console.log(`Det är lördag`);
    break;
  case 7:
    console.log(`Det är söndag`);
    break;
}

// 7
let score = 50;
switch (true) {
  case score >= 80:
    console.log(`A`);
    break;
  case score >= 50:
    console.log(`B`);

  case score >= 30:
    console.log(`C`);
    break;
  case score >= 10:
    console.log(`D`);
    break;
  case score >= 0:
    console.log(`E`);
    break;
}

// 8
let age = 27;
if (age < 18) {
  console.log(`Du är under 18 år`);
}
if (age >= 18 && age <= 65) {
  console.log(`Du är mellan 18 och 65 år`);
}
if (age > 65) {
  console.log(`Du är över 65 år`);
}

// 9
dayOfWeek = `a`;
switch (dayOfWeek) {
  case 1:
    console.log(`Det är måndag`);
    break;
  case 2:
    console.log(`Det är tisdag`);
    break;
  case 3:
    console.log(`Det är onsdag`);
    break;
  case 4:
    console.log(`Det är torsdag`);
    break;
  case 5:
    console.log(`Det är fredag`);
    break;
  case 6:
    console.log(`Det är lördag`);
    break;
  case 7:
    console.log(`Det är söndag`);
    break;
  default:
    console.log(`Okänt val`);
}

// 19
dayOfWeek = 6;
switch (dayOfWeek) {
  case 1:
    console.log(`Det är måndag`);
    break;
  case 2:
    console.log(`Det är tisdag`);
    break;
  case 3:
    console.log(`Det är onsdag`);
    break;
  case 4:
    console.log(`Det är torsdag`);
    break;
  case 5:
    console.log(`Det är fredag`);
    break;
  case 6:
  case 7:
    console.log(`Det är helg! 🎉`);
    break;
}
