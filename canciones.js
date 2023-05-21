const fs = require('fs');

const canciones_function = () => {
    const data = JSON.parse(fs.readFileSync('./canciones.json', 'utf8'));
    return data;
}

module.exports = {canciones_function}