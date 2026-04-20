import express from 'express';
import bcrypt from 'bcryptjs';
import { JSONFilePreset } from 'lowdb/node';


const db = await JSONFilePreset('db.json', { users: [] });


class UserService {
  async findByEmail(email) {
    return db.data.users.find(u => u.email === email);
  }

  async createUser(userData) {
    const { username, email, password } = userData;
    

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = {
      id: Date.now(),
      username,
      email,
      password: hashedPassword
    };

    db.data.users.push(newUser);
    await db.write();
    return newUser;
  }
}

class UserController {
  constructor() {
    this.userService = new UserService();
  }


  register = async (req, res) => {
    try {
      const { username, email, password } = req.body;

  
      if (!email || !password) {
        return res.status(400).json({ error: "Email та пароль обов'язкові" });
      }

  
      const existingUser = await this.userService.findByEmail(email);
      if (existingUser) {
        return res.status(400).json({ error: "Користувач вже існує" });
      }


      const user = await this.userService.createUser({ username, email, password });

      res.status(201).json({
        message: "Користувача створено успішно",
        userId: user.id
      });
    } catch (error) {
      res.status(500).json({ error: "Внутрішня помилка сервера" });
    }
  }
}


const app = express();
app.use(express.json());

const userController = new UserController();


app.post('/register', userController.register);

app.listen(3000, () => console.log('✅ Class-based server started on port 3000'));