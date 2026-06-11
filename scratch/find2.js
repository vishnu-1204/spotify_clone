const fs = require('fs');
const lines = fs.readFileSync('app.js', 'utf-8').split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Thanimaye Thanimaye')) {
        console.log('Thanimaye:', i + 1);
    }
    if (lines[i].includes('"Adiye"')) {
        console.log('Adiye:', i + 1);
    }
}
