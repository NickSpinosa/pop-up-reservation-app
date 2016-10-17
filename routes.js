module.exports = function (app, express){

   app.get("*", function(request, response){
       response.sendFile(__dirname + "/client/build/index.html");
    });

}
