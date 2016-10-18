const db = require('./db/config.js');

//models
const User = require('./db/models/user.js');
const Event = require('./db/models/event.js');
const Restaurant = require('./db/models/restaurant.js');
const Event_User = require('./db/models/events_users.js');

//collections
const Users = require('./db/collections/users.js');
const Events = require('./db/collections/events.js');
const Restaurants = require('./db/collections/restaurants.js');
const Events_Users = require('./db/collections/events_users.js');

module.exports = function (app, express){

  //returns all events
  app.get("/events", function(request, response){
    Events.fetch()
      .then(function(events){
        response.status(200).send(events);
      });
  });

  //creates an event
  app.post("/events", function(request, response){
    console.log("request body", request.body);

    let data = "";

    request.on("data", function(chunk){
      data+= chunk;
    }).on("end", function(){
      
      data = JSON.parse(data);
      console.log("data ==>", data);

      Events.create({
        name: data.name,
        description: data.description,
        location: data.location,
        date: data.description,
        //restaurant_id = 1
      }).then(function(newEvent){
        console.log("created ==>", newEvent);
        response.status(200).send(newEvent);
      });

    });

    

  });

  //returns events owned by a restaurant
  // app.get("/restaurant-events", function(request,response){
  //   Events.fetch().where({restaurant_id = 1})
  //     .then(function(events){
  //       response.status(200).send(events);
  //     });
  // });

  //returns events a user is registered to
  app.get("/myevents", function(request,response){

  })

  //registers a user to an event
  // app.post("/myevents", function(request, reponse){

  //   Events_Users.create({
  //     user_id = request.body.userId,
  //     event_id = request.body.eventId
  //   }).then(function(newEventUser){
  //     console.log("created new user event map ==>", newEventUser);
  //     response.status(200).send(newEventUser);
  //   });

  // });


  //wildcard route enables client side routing
  app.get("*", function(request, response){
       response.sendFile(__dirname + "/client/build/index.html");
    });

}
