import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes'; // Assurez-vous que le chemin est correct
import orders from './routes/orders'; // Assurez-vous que le chemin est correct
import protectedRoutes from './routes/protectedRoutes';

const app: Application = express();

app.use(bodyParser.json());
app.use('/api', authRoutes);  // Ajouter les routes d'authentification
app.use('/api', protectedRoutes);
app.use('/api', orders);

// Gestionnaire d'erreurs JWT
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
  } else {
    next(err);
  }
});

// Configuration du port et démarrage du serveur
const port: string | number = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
