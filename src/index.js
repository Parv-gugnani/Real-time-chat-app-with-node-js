const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const { emit } = require("process");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

let count = 0;

io.on("connection", (socket) => {
  console.log("new websocket connections");

  //defaut message
  socket.emit("message", "welcome");
  socket.broadcast.emit("message", "A new user has joined");

  // send message

  socket.on("sendMessage", (message, callback) => {
    io.emit("message", message);
    callback("Delivered");
  });

  // when user leaves

  socket.on("disconnect", () => {
    io.emit("message", "A user has left");
  });

  // send location
  socket.on("sendLocation", (coords) => {
    io.emit(
      "message",
      `https://google.com/maps?q=${coords.latitude},${coords.longitude}`
    );
  });

  // socket.emit("countUpdated", count);

  // socket.on("increment", () => {
  //   count++;
  //   // socket.emit("countUpdated", count);
  //   io.emit("countUpdated", count);
  // });
});

server.listen(port, () => {
  console.log(`Server is up on port http://localhost:${port}`);
});
