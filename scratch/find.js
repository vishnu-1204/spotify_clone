const fs = require('fs');
const lines = fs.readFileSync('app.js', 'utf-8').split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Uyirey')) {
        console.log('Line:', i + 1);
    }
}
