//Traer libreria http
const http = require("http");

function website(req, res) {

    res.writeHead(200, {"Content-type": "text/html"} );
    res.end("Mi <strong>second</strong> server");

}


let servidor = http.createServer(website);

servidor.listen(6969, "192.168.1.44")

console.log("Server running on port 6969")