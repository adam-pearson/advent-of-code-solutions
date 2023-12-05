const fs = require('fs');

const getCalibrationValues = (data) => {
    const map = {
        one: 'o1e',
        two: 't2o',
        three: 't3e',
        four: '4',
        five: 'f5e',
        six: '6',
        seven: 's7n',
        eight: 'e8t',
        nine: 'n9e',
    };

    let total = 0;

    const arr = data.split('\n');
    
    for (let i = 0; i < arr.length; i++) {
        let newString = arr[i];

        Object.entries(map).forEach(([key, value]) => {
            newString = newString.replaceAll(key, value);
        });

        const matches = newString.match(/\d/g);
        total += Number(matches[0] + matches[matches.length - 1]);
    }

    return total;
}

const data = fs.readFileSync('./input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    return data;
});

console.log(getCalibrationValues(data));

