require('dotenv').config('../.env')
const express = require('express')

const app = express();
const cors = require('cors')
const morgan = require('morgan')

app.use(
    [
        morgan('dev'),
        cors(),
        express.json()
    ]
)


app.get('/health', (_req, res) => {
 
    res.status(200).json({
        message: 'success'
    })
})








//error custom
app.use((_req, _res, next) => {
    const error = new Error('Resource Not Found')
    error.status = 404
    next(error)

})
app.use((error, _req, res, next) => {
    if (error.status) {
      return  res.status(error.status).json({
            message: 'error message 404 page' 
        })
    }
    res.status(500).json({message:'Samething is wrong'})
})


module.exports = app;