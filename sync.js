const execSync = require('child_process').execSync;

const v = execSync('/usr/local/bin/docker exec -i mongo mongo --version')
console.log(v)