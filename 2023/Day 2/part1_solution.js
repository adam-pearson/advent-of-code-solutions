const fs = require('fs');

const calculateResult = (data) => {
    const limits = {
        red: 12,
        green: 13,
        blue: 14,
    }

    const baseRegex = '\\d\+\\b';

    let total = 0;

    data.split('\n').forEach((game) => {
        const split = game.split(':');
        const id = Number(split[0].replace(/\D/g, ''));
        const gameResultString = split[1];

        const numberRegex = new RegExp(baseRegex, 'g');

        let valid = true;

        Object.entries(limits).forEach(([key, limit]) => {
            if (!valid) return;
            
            const colourRegex = new RegExp(baseRegex+' '+key, 'g');

            const results = gameResultString.match(colourRegex)
                .join(' ')
                .match(numberRegex)
                .filter((x) => Number(x) > limit);
                        
            if (results.length) {
                valid = false;
            }
        })

        if (valid) {
        total += id;
        }
    });

    return total;
};

const data = fs.readFileSync('./input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    return data;
});

console.log(calculateResult(data));

