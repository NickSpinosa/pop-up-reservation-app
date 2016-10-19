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


const createUserSession = function (request, response, newUser){
  return request.session.regenerate(function() {
    request.session.user = newUser;
    response.redirect("/");
  });
};

const createChefSession = function (request, response, newChef){
  return request.session.regenerate(function() {
    request.session.chef = newChef;
    console.log("created session", request.session);
    response.redirect("/");
  });
}

const loggedIn = function(req) {
  return req.session ? req.session.user || req.session.chef : false;
}

module.exports = function (app, express){

  //creates a user
  app.post("/user-signup", function(request, response){
    let data = "";

    request.on("data", chunk => data+= chunk)
      .on("end", function() {
        data = JSON.parse(data);

        new User({ username: data.username })
          .fetch()
          .then(found => {
            if(found){
              response.send("that name already exists");
              console.log("user already exists")
            } else {
              const newUser = new User({
                username: data.username,
                password: data.password
              });

              newUser.save()
                .then(function(newUser){
                  console.log("user saved", newUser);
                  createUserSession(request, response, newUser);
                });
            }
          });
      })
  });

  //signs in a user
  app.post("/user-signin", function(request, response){
    let data = "";
    
    request.on("data", chunk => data+= chunk)
      .on("end", () => {
        data = JSON.parse(data);

        new User({username: data.username})
          .fetch()
          .then((user)=>{
            if(user){
              user.comparePassword(data.password, (match)=> {
                if (match){
                  console.log("user logged in");
                  createUserSession(request, response, user);
                } else {
                  console.log("wrong password");
                  response.send("wrong password");
                }
              });
            } else {
              response.send("username not found");
              console.log("username not found");
            }
          });
      });
  });

  //creates a restaurant
  app.post("/chef-signup", function(request, response){
    let data = "";

    request.on("data", chunk => data+= chunk)
      .on("end", function() {
        data = JSON.parse(data);

        new Restaurant({ name: data.name })
          .fetch()
          .then(found => {
            if(found){
              response.send("that name already exists");

            } else {
              const newRestaurant = new Restaurant({
                name: data.name,
                username: data.username,
                password: data.password
              });

              newRestaurant.save()
                .then(function(newRestaurant){
                  console.log("Restaurant saved", newRestaurant);
                  createChefSession(request, response, newRestaurant);
                });
            }
          });
      })
  });

  //signs in a restaurant
  app.post("/chef-signin", function(request, response){
    let data = "";
    
    request.on("data", chunk => data+= chunk)
      .on("end", () => {
        data = JSON.parse(data);

        new Restaurant({name: data.name})
          .fetch()
          .then((restaurant)=>{
            if(restaurant){
              restaurant.comparePassword(data.password, (match)=> {
                if (match){
                  console.log("chef logged in");
                  createChefSession(request, response, restaurant);
                } else {
                  console.log("wrong password");
                  response.send("wrong password");
                }
              });
            } else {
              response.send("restaurant not found");
              console.log("restaurant name not found");
            }
          });
      });
  });

  //returns all events
  app.get("/events", function(request, response){
    Events.fetch()
      .then(function(events){
        response.status(200).send(events);
      });
  });

  //returns chef events
  app.get("/chef-events", function(request, response){
    Events.fetch()
      .then(function(events){
        response.status(200).send(events.where({'restaurant_id': request.session.chef.id}));
      });
  });

  //returns user events
  app.get("/user-events", function(request, response){

    Events_Users.fetch()
      .then(function(events_users){
        let eventIds = events_users.where({'user_id': request.session.user.id});
        
        let events = eventIds.map((eventId) => {
          return Events.where({"id": eventId.attributes.id})[0].attributes;
        });

        console.log("user events", events);

        response.status(200).send(events);

      });
  });

  //registers a user to an event
  app.post("/user-events", function(request, response){
    let data = "";

    request.on("data", chunk => data+= chunk)
      .on("end", () => { 
        console.log("data", data);

        Events_Users.create({
          user_id: request.session.user.id,
          event_id: data
        })
        .then((newRegistedEvent) => {
          console.log("registered new event", newRegistedEvent);
          response.status(200).send(newRegistedEvent);
        });
      });
  });

  //creates an event
  app.post("/events", function(request, response){

    console.log("session", request.session);

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
        date: data.date,
        restaurant_id: request.session.chef.id

      }).then(function(newEvent){
        console.log("created ==>", newEvent);
        response.status(200).send(newEvent);
      });

    });

  });


  //wildcard route enables client side routing
  app.get("*", function(request, response){
       response.sendFile(__dirname + "/client/build/index.html");
    });

}
