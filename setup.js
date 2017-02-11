var r = require('rethinkdbdash')();

console.log('Creating database...');
r.dbCreate('eisner');
console.log('Database created.');

console.log('Creating table \'eisner\'...');
r.db('eisner').tableCreate('edition');
console.log('Table created.');

process.exit(0);