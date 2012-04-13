var express = require('express'),
    stylus = require('stylus'),
    template = require('./lib/template'),
    routes = require('./routes'),
    conf = require('./config'),
    app = express(),
    server,
    devEnv = app.settings.env == 'development'

// Routes
app.get('/', routes.home)
app.get('/users', routes.users)

// Stylus middleware
app.use(stylus.middleware({
  debug: devEnv,
  src: __dirname + conf.publicPath,
  dest: __dirname + conf.publicPath,
  compile: function(str) {
    return stylus(str)
      .set('compress', !devEnv)
      .include(require('nib').path)
  }
}))

// Connect config
app.use(express.favicon())
   .use(express.logger('dev'))
   .use(express.static('public'))
   .use(express.cookieParser('secret'))
   .use(express.session())

// Express config
app.engine('html', template)
app.set('view engine', 'html')
app.set('views', __dirname + conf.viewsPath)

// Launch
server = app.listen(3000)
console.log(
  "Express server listening on http://localhost:%d in %s mode",
  server.address().port, app.settings.env
)
