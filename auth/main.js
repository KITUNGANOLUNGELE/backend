const http = require('http');
const app = require('./app');


const server = http.createServer(app)

const port = process.env.portAuth || 3004

server.listen(port,()=>{
    console.log('server for enseignant has been started')
})