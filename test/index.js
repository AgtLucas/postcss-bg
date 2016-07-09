const postcss = require('postcss')
const expect = require('chai').expect
const plugin = require('../')

const test = (input, output, opts, done) => {
  postcss([plugin(opts)]).process(input).then((result) => {
    expect(result.css).to.eql(output)
    expect(result.warnings()).to.be.empty
    done()
  }).catch((error) => {
    done(error)
  })
}

describe('postcss-bg', () => {
  it('Should replace `bg` with `background`', (done) => {
    test('.blackbriar { bg: #666 }', '.blackbriar { background: #666 }', {}, done)
  })
})
