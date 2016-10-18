let db = require('../config.js');
const User = require('./user.js');
const Event = require('./event.js');

const Event_User = db.Model.extend({
  tableName: 'events_users',

  user: function() {
    return this.belongsTo(User);
  },

  event: function() {
    return this.belognsTo(Event);
  }
});

module.exports = Event_User;