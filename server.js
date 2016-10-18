const express = require("express");
const app = express();

require("./middleware.js")(app, express);
require("./routes.js")(app, express);

app.listen(8000);

//change
