const Fs = require('fs');

Fs.writeFileSync('notes.txt', 'my name is pranav verma')

Fs.appendFileSync('notes.txt', " my friend name is rahul ")