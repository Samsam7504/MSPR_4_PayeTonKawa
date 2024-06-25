import { Router } from 'express';
import { login } from '../controllers/authController';

const router = Router();

// Route pour se connecter et obtenir un JWT
router.post('/login', login);

export default router;
