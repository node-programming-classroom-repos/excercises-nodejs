// Ovning 1.1
const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Hej! Vad heter du?`, (svar) => {
  console.log(`Hej ${svar}`);
  rl.close();
});

// Ovning 1.2
const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Hej! vilket år(XXXX) föddes du?`, (svar) => {
  console.log(`Du är ${2023 - svar} år (om vi fortffarande är i 2023) `);
  rl.close();
});

// Ovning 1.3
const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Välj tal nr 1`, (svar1) => {
  rl.question(`Välj tal nr 2`, (svar2) => {
    rl.question(`Välj nu en oerator (+ - * /)`, (operator) => {
      let resultat;
      switch (operator) {
        case `+`:
          resultat = Number(svar1) + Number(svar2);
          break;
        case `-`:
          resultat = Number(svar1) - Number(svar2);
          break;
        case `/`:
          resultat = Number(svar1) / Number(svar2);
          break;
        case `*`:
          resultat = Number(svar1) * Number(svar2);
          break;
        default:
          console.log(`Ogiltig operator`);
          rl.close();
          return;
      }
      console.log(`Resultatet av ${svar1}${operator}${svar2} är: ${resultat}`);
      rl.close();
    });
  });
});
