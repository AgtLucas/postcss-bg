const postcss = require('postcss')

module.exports = postcss.plugin('postcss-bg', () => {
  return (css) => {
    css.walkDecls('bg', (decl) => {
      decl.prop = 'background'
    })
  }
})
