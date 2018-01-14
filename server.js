const express        = require('express');
const morgan         = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const routes         = require('./config/routes');
const mongoose       = require('mongoose');
const methodOverride = require('method-override');
mongoose.Promise     = require('bluebird');
const { port, env, dbURI } = require('./config/environment');

const app = express();

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
if(env === 'development') app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
