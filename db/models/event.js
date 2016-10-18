let db = require('../config.js');
const Restaurant = requite('./restaurant.js');

const Event = db.Model.extend({
  tableName: 'events',

  restaurant: function() {
    return this.belongsTo(Restaurant);
  }
});

module.exports = Event;