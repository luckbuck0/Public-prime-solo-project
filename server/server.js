const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

//Route to the images 
const avatarImages= require('./routes/img.router')

//Route to the workspace
const workspace = require('../server/routes/workspace.routes')
const getEditWorkspace= require('../server/routes/workspace.Get')
//Route to the tabs
const tabs = require('../server/routes/tabs.router')
const getTabs = require('../server/routes/tabs.Get')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);

// the route that saga is calling on this is then sent to avatarImages which
// is just a variable we defined to hold the img.router
app.use('/api/images', avatarImages)

// the route that saga is calling on this is then sent to workspace which
// is just a variable we defined to hold the workspace.router
app.use('/api/workspaces', workspace)
app.use('/api/workspaces/get', getEditWorkspace)
// the route that saga is calling on this is then sent to workspace which
// is just a variable we defined to hold the workspace.router
app.use('/api/tabs', tabs)

app.use('/api/get/', getTabs)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
