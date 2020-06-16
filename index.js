/**
 * The remark plugin for supporting numbered headings ids
 * @author iloveip
 */

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

      let lastChild = node.children[node.children.length - 1]

      if (lastChild && lastChild.type === 'text') {
        let string = lastChild.value.replace(/ +$/, '')
        let matched = string.match(/ {#([^]+?)}$/)

        if (matched) {
          let id = matched[1]
          if (id.length) {
            props.id = id

            string = string.substring(0, matched.index)
            lastChild.value = string
          }
        } else {
          props.id = prefix + String(count)

          count++
        }
      }
    }
  }
}
