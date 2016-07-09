const postcss = require('postcss')

module.exports = postcss.plugin('postcss-bg', () => {
  return (css) => {
    css.eachDecl('bg', (decl) => {
      decl.prop = 'background'
    })
  }
})
