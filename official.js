const child = require('child_process')
const mongodb = require('mongodb');
try {
  const output = child.execSync('mongo --version').toString();
  console.log(output.split('\n').length);
  console.log(output.split('\n')[0].replace('MongoDB shell version v', '').trim());
} catch (err) {}

const mongoClient = mongodb.MongoClient;
mongoClient.connect('mongodb://localhost', (err, db) => {
  console.log('success');
  db.command({ buildinfo: 1 }).then((v) => console.log(v))
});