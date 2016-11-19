var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

var board = null

// API REST

app.get('/', function (req, res) {
    res.send('prueba')
})

app.get('/customers', function (req, res) {
    res.json(board)
})

app.listen(3000, function () {
    console.log('Server in port 3000')
})
