const getArgs = func => {
  // First match everything inside the function argument parens.
  let matchedItems = func.toString().match(/function\s.*?\(([^)]*)\)/)
  if (matchedItems && matchedItems.length > 0) {
    let args = matchedItems[1].trim()
    if (args.length > 0) {
 
      // Split the arguments string into an array comma delimited.
      return args.split(',').map( arg => {
        // Ensure no inline comments are parsed and trim the whitespace.
        return arg.replace(/\/\*.*\*\//, '').trim()
      })
    }
  }

  return "no args"
}

module.exports = {

  getMethods: obj => {
    return Object.entries(obj)
    .filter(([key, value]) => typeof obj[key] === 'function')
    .map(([key, value]) => `${key}: ${getArgs(value)}`)
    .sort((x, y) => {
      let strX = x.toString()
      let strY = y.toString()
      return strX.localeCompare(strY)
    })
  },

  getProperties: obj => {
    return Object.getOwnPropertyNames(obj)
    .filter(item => typeof obj[item] !== 'function')
  }
}
