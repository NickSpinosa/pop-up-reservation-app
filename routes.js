const db = require('/db/config.js');

//models
const User = require('/db/models/user.js');
const Event = require('/db/models/event.js');
const Restaurant = require('/db/models/restaurant.js');
const Event_User = require('/db/models/events_users.js');

//collections
const Users = require('/db/collections/users.js');
const Events = require('/db/collections/events.js');
const Restaurants = require('/db/collections/restaurants.js');
const Events_Users = require('/db/collections/events_users.js');

module.exports = function (app, express){

  app.get("/all-events", function(request, response){
    Events.fetch()
      .then(function(events){
        response.status(200).send(events);
      });
  });

 // app.post("events")

  app.get("*", function(request, response){
       response.sendFile(__dirname + "/client/build/index.html");
    });

}
