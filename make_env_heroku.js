const fs = require('fs')

const values = `
KEY_PASS=${process.env.GMAIL_PASS}
DB_PASS=vwxyz
`

fs.writeFileSync('.env', values, (err)=>{
  if (err) {
    console.error(err)
    throw err
  }
})
