const path = require('path');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const keys = require('./backend/config/keys');
const api = require('./backend/routes/');
require('./backend/models/user');
require('./backend/services/passport');

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieSession({
    maxAge: 24*60*60*1000, // 1 day
    keys: [keys.cookieKey]
}));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', api);

app.get('/*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

mongoose.connect(keys.mongoUri);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
