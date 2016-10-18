const path = require('path');
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '/popup.sqlite')
  },
  useNullAsDefault: true
});
let db = require('bookshelf')(knex);

db.knex.schema.hasTable('restaurants').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('restaurants', function (link) {
      link.increments('id').primary();
      link.string('name', 100);
      link.string('username', 100);
      link.string('password', 100);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 100).unique();
      user.string('password', 100);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('events').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('name', 100).unique();
      user.string('description', 400);
      user.string('location', 50);
      user.string('date', 20);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('events_users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('events_users', function (user) {
      user.increments('id').primary();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});


module.exports = db;