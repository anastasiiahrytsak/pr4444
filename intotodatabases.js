const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true },
  age: Number
});


const User = mongoose.model('User', userSchema);


async function createUser() {
  try {
    const newUser = new User({
      username: "DevMaster",
      email: "hello@example.com",
      age: 25
    });
    
    await newUser.save();
    console.log("Користувача збережено успішно!");
  } catch (err) {
    console.error("Помилка БД: " + err.message);
  }
}