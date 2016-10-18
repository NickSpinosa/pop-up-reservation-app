var db = require('../config');
var Event_User = require('../models/events_users.js');

var Events_Users = new db.Collection();

Events_Users.model = Event_User;

module.exports = Events_Users;
