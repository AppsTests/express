const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! It is the best app in the world to say Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
