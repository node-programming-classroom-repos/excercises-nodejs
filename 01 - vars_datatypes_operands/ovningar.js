// Övning 1
let name = `Tiberius Gherac`;

// 2
num1 = 1;
num2 = 2;
console.log(num1 + num2);

// 3
firstName = `Tiberius`;
lastName = `Gherac`;
console.log(firstName + ` ` + lastName);

// 4
num3 = 3.3;
num4 = 4.4;
console.log(Math.round(num3 - num4));

// 5
let isSunShining = false;
let isRaining = false;
if (isSunShining && isRaining) {
  console.log(`There is no sun out and is not raining`);
} else {
  console.log(`The sun is out and it is raining. There should be rainbows`);
}

// 6
const fruits = [`apple`, `banan`, `apelsin`];
console.log(fruits[1]);

// 7
fruits[1] = `kiwi`;
console.log(fruits[1]);

// 8
console.log(fruits.length);

// 9
let isSunny = true;
let isWarm = false;

if (isSunny && isWarm) {
  console.log("It's sunny and warm. Seems like summer is here");
} else if (isSunny && !isWarm) {
  console.log("It's sunny but not that warm.");
} else if (!isSunny && isWarm) {
  console.log("The sun is out but it's still warm.");
} else {
  console.log(
    "There's no sun and it isn't warm. Usual day of november it seems"
  );
}

if (isSunny || isWarm) {
  console.log("It's either sunny or warm (or both)");
} else {
  console.log("It's neither sunny nor warmth.");
}

// 10
const mixedData = ["String", 123, 4.5, true];
console.log(mixedData[0]);
console.log(mixedData[1]);
console.log(mixedData[2]);
console.log(mixedData[3]);
