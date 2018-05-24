const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bita4students-nodejs-api');

// mongoose.connect('mongodb://burch:burch123@cluster0-shard-00-00-ttbct.mongodb.net:27017,cluster0-shard-00-01-ttbct.mongodb.net:27017,cluster0-shard-00-02-ttbct.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');