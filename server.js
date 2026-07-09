const express = require('express');
const app = express();
// app.get('/', (request, response) => {
//   response.send('Hello World!');    
// });
// app.get('/some-path', handler) — you use this when you need to run custom logic for a specific, exact URL — like checking a database, generating dynamic data, doing calculations, or (in our case) streaming live SSE data.
//  It only runs for that one specific path.

// You run node server.js → your machine starts listening on port 3000.
// You open a browser and go to http://localhost:3000 → the browser sends a GET request to your server.
// Your server checks: "do I have a rule for GET /?" → yes, runs your function.
// Your function calls response.send('Hello World!') → this text gets sent back to the browser.

app.use(express.static('public'));
app.listen(3000);