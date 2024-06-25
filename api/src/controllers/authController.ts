import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

interface User {
  id: number;
  username: string;
}

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;
  
    // Vérifier les identifiants
    if (username === 'expectedUsername' && password === 'expectedPassword') {
      const user: User = { id: 1, username }; // Assurez-vous que cette définition est compatible avec votre usage
      const token = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).send('Invalid username or password');
    }
  };
