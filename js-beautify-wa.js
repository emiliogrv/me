// Load the library and specify options
const replace = require('replace-in-file')

const options = {
  files: './node_modules/js-beautify/js/src/html/beautifier.js',
  from: 'return arr.indexOf(what) !== -1',
  to: 'return arr.indexOf(\'***\') !== -1 || arr.indexOf(what) !== -1'
}

try {
  const results = replace.sync(options)

  // eslint-disable-next-line no-console
  console.log('Replacement js-beautify-wa results:', results)
} catch (error) {
  // eslint-disable-next-line no-console
  console.error('Error js-beautify-wa occurred:', error)
}
