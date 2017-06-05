const axios = require('axios')

global.navigator = {}
global.screen = {}
global.window = {}
global.document = {}

let i = 0

const fp = () => new Promise(resolve => resolve(Math.random().toString(36).substr(2)))

async function main() {
  const req = Array.from({ length: 10000 }, () => 'react')

  for (let vote of req) {
    const fingerprint = await fp()
    const l = await axios.post('https://ng2-vs-react.herokuapp.com/vote', { vote }, {
      headers: {
        fingerprint,
        Accept: 'application/json; charset=utf-8'
      }
    })
    console.log(l, ++i)
  }
}


main()
