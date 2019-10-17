const mongoose = require('mongoose');
const mongo_uri = process.env.MONGO_URI || 'mongodb://root:swgohroot19@ds335678.mlab.com:35678/swgohevents'

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;