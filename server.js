var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

var board = null

var matrix = function ( rows, cols, defaultValue){
    var arr = [];
    // Creates all lines:
    for(var i=0; i < rows; i++){
        // Creates an empty line
        arr.push([]);
        // Adds cols to the empty line:
        arr[i].push( new Array(cols));
        for(var j=0; j < cols; j++){
            // Initializes:
            arr[i][j] = defaultValue;
        }
    }
    return arr;
}

// API REST
app.get('/board/:rows/:columns', function (req, res) {
    res.json(matrix(req.params.rows, req.params.columns, {'state': 0}))
})

app.listen(3000, function () {
    console.log('Server in port 3000')
})
