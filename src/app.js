const app = require('./config/express');
const controller = require('./controllers/controller');

app.post('/api/auth/signup', controller.signup);
app.post('/api/auth/signin', controller.signin);

module.exports = app;