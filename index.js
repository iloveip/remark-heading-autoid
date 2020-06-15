var visit = require('unist-util-visit')

module.exports = autoHeadingIds

function autoHeadingIds() {
  return transformer
}

function transformer(ast) {
  var count = 1

  visit(ast, 'heading', visitor)

  function visitor(node) {
    var data = node.data || (node.data = {})
    var props = data.hProperties || (data.hProperties = {})

    props.id = 'id' + String(count)

    count++
  }
}
