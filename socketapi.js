
const io = require( "socket.io" )();
const socketapi = {
    io: io
};
// Add your socket.io logic here!
io.on( "connection", ( socket )=> {
   socket.on('stream', (image) => {
       socket.broadcast.emit('stream', image)
    })
});
      


    

// end of socket.io logic

module.exports = socketapi;