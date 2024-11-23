const http = require('node:http');

// everytime a user tries to talk to our webserver
// http.createServer will run the call back inside the parameters



const webServer = http.createServer((req, res) => {
    res.setHeader("Content-Type", 'text/html') // (param1, param2) - param2: MIME TYPE
    res.end('<h1>This is a test script<h1>')
}).listen(8080, () => {console.log('Web Server is now running.')});


// four digit number that identifies the current PC so the browser does not get confused
// http://localhost:1124/index.html

// node --watch app.js
// anytime you update the server, you dont have to kill the server to show changes