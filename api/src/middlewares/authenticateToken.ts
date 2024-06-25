import { Request, Response, NextFunction } from 'express';
import { expressjwt as jwt, Request as JWTRequest } from 'express-jwt';
import { config } from '../config/config';

interface AuthRequest extends Request {
  auth: JWTRequest;
}

export function authenticateToken() {
  return jwt({
    secret: config.jwtSecret,
    algorithms: ['HS256']
  });
}
