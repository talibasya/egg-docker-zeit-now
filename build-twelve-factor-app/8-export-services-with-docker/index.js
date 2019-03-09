const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end("hello world\n")
})

server.listen(3000)

console.log("Server running at http://127.0.0.1:3000/")
