const mongoose = require('mongoose');

const { MONGODB_URI } = require('../config');

const Item = require('../models/item');

const { items } = require('../db/data');

console.log(`Connecting to mongodb at ${MONGODB_URI}`);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.info('Delete Data');
    return Promise.all([
      Item.deleteMany()
    ]);
  })
  .then(() => {
    console.info('Seeding Database');
    return Promise.all([
      Item.insertMany(items)
    ]);
  })
  .then(results => {
    console.log('Inserted', results);
    console.info('Disconnecting');
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    return mongoose.disconnect();
  });
