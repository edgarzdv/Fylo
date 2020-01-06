const express = require('express');
const session = require('express-session'
)
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const cors = require('cors');

const addBugRoutes = require('./routes/bug.routes')
const addUserRoutes = require('./routes/user.routes')

const app = express();
const port = rocsess.env.PORT || 3030
const VIEW_DIR = `${__dirname}/views`;

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));

app.use(session({
  secret: 'sxjbijxixszaixsax76x87a6sxbash',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

addBugRoutes(app);
addUserRoutes(app);

app.listen(port, () => {
  console.log(`App listening to port: ${port}`);

})
