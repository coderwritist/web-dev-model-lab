const mongoose = require('mongoose');
const readline = require('readline');

mongoose.connect('mongodb://0.0.0.0:27017/StuDen', {});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const userSchema = new mongoose.Schema({
  username: String,
  salt: String,
  hash: String,
});

const User = mongoose.model('User', userSchema);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log('\n*** MENU ***');
  console.log('1. Insert a user');
  console.log('2. Delete users');
  console.log('3. Update a user');
  console.log('4. Find users');
  console.log('5. Exit');
  console.log('********');
}

function promptUserInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function insertUser() {
  const username = await promptUserInput('Enter the username: ');
  const salt = await promptUserInput('Enter the salt: ');
  const hash = await promptUserInput('Enter the hash: ');

  const user = new User({
    username,
    salt,
    hash,
  });

  await user.save();
  console.log('User inserted successfully.');
}

async function deleteUser() {
  const username = await promptUserInput('Enter the username: ');

  const deleteQuery = { username };
  await User.deleteMany(deleteQuery);
  console.log('Users deleted successfully.');
}

async function updateUser() {
  const username = await promptUserInput('Enter the username to update: ');
  const newUsername = await promptUserInput('Enter the new username: ');

  const updateQuery = { username };
  const updateData = { username: newUsername };
  await User.updateMany(updateQuery, updateData);
  console.log('Users updated successfully.');
}

async function findUsers() {
  const username = await promptUserInput('Enter the username to search: ');

  const findQuery = { username };
  const users = await User.find(findQuery);
  console.log('Users found:');
  console.log(users);
}

function runProgram() {
  displayMenu();
  rl.question('Enter your choice: ', async (choice) => {
    switch (choice) {
      case '1':
        await insertUser();
        break;
      case '2':
        await deleteUser();
        break;
      case '3':
        await updateUser();
        break;
      case '4':
        await findUsers();
        break;
      case '5':
        console.log('Exiting...');
        rl.close();
        process.exit(0);
      default:
        console.log('Invalid choice. Please try again.');
    }

    runProgram();
  });
}

runProgram();