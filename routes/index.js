// Home
exports.home = function(req, res) {
  res.render('home', {
    layout: 'layout',
    title: 'OFONT'
  })
}
