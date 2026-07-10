const source = new EventSource("/events");// create the connect
 
const speakerEl=document.getElementById("speaker") 
const participantsEl=document.getElementById("participants")
const votesEl=document.getElementById("votes")


source.onmessage = (event) => {
 const data = JSON.parse(event.data);
 speakerEl.textContent = data.currentSpeaker;
participantsEl.textContent=data.participantCount;
votesEl.textContent=data.voteCount;
}


