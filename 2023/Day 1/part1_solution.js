const fs = require('fs');

const getCalibrationValues = (data) => {
    let total = 0;

    const arr = data.split('\n');
    
    for (let i = 0; i < arr.length; i++) {
        const matches = arr[i].match(/\d/g);

        total += Number(matches[0] + matches[matches.length - 1]);
    }

    return total;
}

const data = fs.readFileSync('./input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    return data;
});

console.log(getCalibrationValues(data));