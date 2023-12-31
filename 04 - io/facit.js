
//Övning 1.1: Läs från Konsolen

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Vad är ditt namn? ', function (name) {
    console.log('Hej, ' + name + '!');
    rl.close();
});

//Övning 1.2
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ange ditt födelsedatum (ÅÅÅÅ-MM-DD): ', function (birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    console.log('Du är ' + age + ' år gammal.');
    rl.close();
});

//Övning 1.3
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ange det första talet: ', function (num1) {
    rl.question('Ange en operator (+, -, *, /): ', function (operator) {
        rl.question('Ange det andra talet: ', function (num2) {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(num1) + parseFloat(num2);
                    break;
                case '-':
                    result = parseFloat(num1) - parseFloat(num2);
                    break;
                case '*':
                    result = parseFloat(num1) * parseFloat(num2);
                    break;
                case '/':
                    result = parseFloat(num1) / parseFloat(num2);
                    break;
                default:
                    result = 'Ogiltig operator';
            }
            console.log('Resultat: ' + result);
            rl.close();
        });
    });
});

//Övning 2: Skriv till en Fil

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Skriv något: ', function (text) {
    fs.writeFile('output.txt', text, function (err) {
        if (err) throw err;
        console.log('Data sparad i output.txt');
        rl.close();
    });
});

// Övning 3: Läs från en Fil

const fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log('Innehåll i filen:\n' + data);
});

//Övning 4: Kopiera en Fil

const fs = require('fs');

fs.copyFile('input.txt', 'output.txt', (err) => {
    if (err) throw err;
    console.log('Fil kopierad.');
});

//Övning 5: Lista Filer i en Katalog

const fs = require('fs');

fs.readdir('./', (err, files) => {
    if (err) throw err;
    console.log('Filer i katalogen:');
    files.forEach(file => {
        console.log(file);
    });
});