require('dotenv').config()
const http = require('http')
const app = require('./app/app')

const server = http.createServer(app)
const PORT = process.env.PORT || 8000

server.listen(PORT, (req, res) => {
    console.log(`Server f Listing On Port --> ${PORT}`);
})