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
app.get('/events',(request, response)=>{
    response.writeHead(200, {
   'Content-Type': 'text/event-stream',
'Cache-Control': 'no-cache',
'Connection': 'keep-alive'
});
let voteCount=0;
const intervalId=setInterval(()=>{
const peopleArray=["abc","john","lisa","mony","leslie","joy","bob"];
let currentObj={ currentSpeaker: "", participantCount:0,  voteCount:0  }
let someRandomIndex=Math.floor(Math.random()*peopleArray.length)
currentObj.currentSpeaker=peopleArray[someRandomIndex]
currentObj.participantCount=Math.floor(Math.random() * 20+5);
  voteCount++; 
  currentObj.voteCount = voteCount; 
response.write("data: " + JSON.stringify(currentObj) + "\n\n")
},3000)
request.on('close', () => { clearInterval(intervalId)}) 
//this registers a listener that fires automatically when the client disconnects.
})
app.listen(3000);
//Server: real object → JSON.stringify → text string → sent over network → Browser: receives text string → JSON.parse → real object again.
