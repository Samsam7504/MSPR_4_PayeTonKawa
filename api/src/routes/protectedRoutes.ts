import { Router, Request } from 'express';
import { authenticateToken } from '../middlewares/authenticateToken';
import { JwtPayload } from 'jsonwebtoken';

// Extend the Express Request object to include the JWT payload
interface AuthRequest extends Request {
  auth: JwtPayload; // Assuming your JWT payload has this structure
}

const router = Router();

router.get('/protected', authenticateToken(), (req, res) => {
  const authReq = req as AuthRequest; // Type cast to access custom auth property
  res.send(`Welcome, your ID is ${authReq.auth.id}`);
});

export default router;
