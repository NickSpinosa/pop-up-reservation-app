let db = require('../config');
const bcrypt = require('bcrypt-nodejs');
const Promise = require('bluebird');

const Restaurant = db.Model.extend({
  tableName: 'restaurants',

  initialize: function() {
    this.on("creating", this.hashPassword);
  },

  comparePassword: function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get ('password'), (err, isMatch) => {
      callback(isMatch);
    });
  },
  
  hashPassword: function() {
    const cipher = Promise.promiseify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash){
        this.set('password', hash);
      });
  }
});

module.exports = Restaurant;