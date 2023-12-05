const fs = require('fs');

const calculateResult = (data) => {
    const colours = ['red', 'green', 'blue'];

    const baseRegex = '\\d\+\\b';

    let total = 0;

    data.split('\n').forEach((game) => {
        const split = game.split(':');
        const gameResultString = split[1];

        const numberRegex = new RegExp(baseRegex, 'g');

        const fewestPossible = [];

        colours.forEach((colour) => {            
            const colourRegex = new RegExp(baseRegex+' '+colour, 'g');

            const results = gameResultString.match(colourRegex)
                .join(' ')
                .match(numberRegex)
                .map((x) => Number(x));

                fewestPossible.push(Math.max(...results, 0));
        })
        
        total += fewestPossible.reduce((m, n) => m * n);
    });

    return total;
};

const data = fs.readFileSync('./input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    return data;
});

console.log(calculateResult(data));

