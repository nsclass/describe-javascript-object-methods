/*
 * Copyright 2019-present, Nam Seob Seo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

const getMethods = obj => {
  return Object.entries(obj)
  .filter(([key, value]) => typeof obj[key] === 'function')
  .map(([key, value]) => `${key}: ${getArgs(value)}`)
  .sort((x, y) => {
    let strX = x.toString()
    let strY = y.toString()
    return strX.localeCompare(strY)
  })
}

const getProperties =  obj => {
  return Object.getOwnPropertyNames(obj)
  .filter(item => typeof obj[item] !== 'function')
  .sort((x, y) => x.toString().localeCompare(y.toString()))
}

module.exports = {
  getMethods: getMethods,
  getProperties: getProperties
}
