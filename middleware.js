module.exports = function(app, express) {
    app.use((req, res, next) => {
        console.log(req.method, " AT ", req.url);
        next();
    });

    app.use(express.static(__dirname + '/client/build'));
}