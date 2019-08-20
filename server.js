
const express=require('express')


var cors = require('cors')
var app = express()
 
app.use(cors())

const router =express.Router()

app.listen(8080,()=>{
    console.log('Server listening on port 8080')
})

// app.use(express.json());

app.use('/', require('./routes/index.js'));





