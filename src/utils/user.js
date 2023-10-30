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
const removeUser = () => {
  const index = users.findIndex((user) => user.id == id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};
// getuser data
const getUser = () => {
  return users.find((user) => user.id === id);
};

// get user in room
const getUserInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

//

const user = getUser(42);
console.log(user);

const userList = getUserInRoom("");
// debugging
addUsers({ id: 22, username: "Andrew", room: "   South Philly" });
addUsers({ id: 22, username: "randy", room: "   South Philly" });
addUsers({ id: 42, username: "Parv", room: "Center city" });

console.log(users);
