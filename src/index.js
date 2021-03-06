const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session')
const MySQLStore = require('express-mysql-session');
const passport = require('passport')

const { database } = require('./keys');



// inicializaciones

const app = express();
require('./lib/passport')
// settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layaouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars"),
  })
);
app.set("view engine", ".hbs");

// Midlewares
// Funciones que se ejecutan cada vez que el cliente envia una peticion
app.use(session({
  secret: 'cualquierpalabra',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize())
app.use(passport.session())
// Variables Globales

app.use((req, res, next) => {
  app.locals.success = req.flash('success')
  app.locals.message = req.flash('message')
  next();
});

// Routes
app.use(require("./routes"));
app.use(require("./routes/authentication"));
app.use("/links", require("./routes/links"));

// Public
app.use(express.static(path.join(__dirname, "public")));

// Starting the server
app.listen(app.get("port"), () => {
  console.log("Servidor esta en el puerto", app.get("port"));
});
