var visit = require('unist-util-visit')

module.exports = autoHeadingIds

var deafultPrefix = 'id'

function autoHeadingIds(options) {
  var settings = options || {}
  var prefix = settings.prefix || deafultPrefix
  return transformer

  function transformer(ast) {
    var count = 1

    visit(ast, 'heading', visitor)

    function visitor(node) {
      var data = node.data || (node.data = {})
      var props = data.hProperties || (data.hProperties = {})

      props.id = prefix + String(count)

      count++
    }
  }
}
