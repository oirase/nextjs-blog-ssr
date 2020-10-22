const fs = require('fs')

const values = `
KEY_PASS=${process.env.GMAIL_PASS}
`

fs.writeFileSync('.env', values, (err)=>{
  if (err) {
    console.error(err)
    throw err
  }
})
