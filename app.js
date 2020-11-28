const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())

app.get('/', function (req, res) {
  const value = parseInt(JSON.stringify(req.body.data), 10)
  const newValue = value * 2 * 15
  res.send({"result": newValue})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
