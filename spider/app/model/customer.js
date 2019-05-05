'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CustomerSchema = new Schema({
    email: String,
    phone: String,
    address: String,
  });

  return mongoose.model('Customer', CustomerSchema);
};
