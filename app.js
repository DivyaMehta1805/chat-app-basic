const io = require("socket.io")(5000);
const users = {};
const append=(messages)=>{
    const element= document.createElement('div');
    element.innerText=messages;
    element.classList.add('messages');
    
}

io.on('connection',server=>{
    console.log(socket.id);
    socket.on('userjoin',namee=>{
        user[socket.id]=namee;
        socket.broadcast.emit('user-joined',namee);
    })
    socket.on('send',message=>{
        socket.broadcast.emit("receive",{message:message,namee:user[socket.id]})
    })
})
