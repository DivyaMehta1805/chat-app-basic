const socket =io(`https://localhost:6000`);
const form = document.getElementById("send-container");
const message= document.getElementById("messages");
const intro = document.getElementById("intro");
const namee = prompt("entr your name");
socket.emit('userjoin',namee);
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = intro.value;
    append(`You: ${messages}`);
    socket.emit('send', messages);
    messageInput.value = '';
})
socket.on('userjoined',namee=>{

    append("${namee} user joined",messages);
})
socket.on('receive', data=>{
    append(`${data.namee }: ${data.messages}`);
})