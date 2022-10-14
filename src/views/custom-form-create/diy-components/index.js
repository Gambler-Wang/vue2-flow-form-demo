const path = require('path')
const files = require.context('./', false, /\.vue$/)

const modules = {}
files.keys().forEach((key) => {
  const name = replaceToUpperCase(path.basename(key, '.vue'))
  modules[name] = files(key).default || files(key)
})
function replaceToUpperCase(str) {
  let arr = str.split('-')
  let resStr = arr.reduce(function(prev, cur){
      let str = prev + cur.slice(0, 1).toUpperCase() + cur.slice(1)
      return str
  })
  resStr = resStr.slice(0, 1).toUpperCase() + resStr.slice(1)
  return resStr
}
export default modules
