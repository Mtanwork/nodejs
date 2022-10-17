const express = require('express')
const app = express()
const port = 3000
//route
app.get('/homepage', (req, res) => {
  return res.send('Hello World!')
})

app.listen(port, () => {
  return console.log(`Example app listening at http://localhost:${port}`)
})