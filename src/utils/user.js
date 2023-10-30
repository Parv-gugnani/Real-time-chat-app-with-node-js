const users = [];

// add
const addUser = ({ id, username, room }) => {
  //clean
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //   validate
  if (!username || !room) {
    return {
      error: "Username and room are required",
    };
  }

  //check for the existing user
  const existingUser = users.find((user) => {
    return (user.room = room && user.username === username);
  });

  //
  if (existingUser) {
    return {
      error: "Username already exists",
    };
  }

  const user = { id, username, room };
  users.push(user);
  return { user };
  //
};

// remove
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};
// getuser data
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

// get user in room
const getUserInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUserInRoom,
};
