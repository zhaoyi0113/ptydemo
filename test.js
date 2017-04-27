let str='mongodb://mongodb.net:27017,mongodb.net:27017,00-02-oexhg.mongodb.net:27017/admin?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'

let m = str.match(/mongodb:\/\/(\S+):(\S+)@(\S+)/)
console.log(m);
