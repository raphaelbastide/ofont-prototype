var _ = require('underscore'),
    template,
    cons = require('consolidate')

template = module.exports = function(path, options, fn) {
  var layoutPath,
      viewsPath = options.settings['views'] || '.',
      viewEngine = options.settings['view engine'] || 'html'
  cons.hogan(path, options, function(err, result) {
    if (options.layout) {
      layoutPath = viewsPath + '/' + options.layout + '.' + viewEngine
      cons.hogan(layoutPath, _.extend(options, {body: result}), fn)
    } else {
      fn(err, result)
    }
  })
}
