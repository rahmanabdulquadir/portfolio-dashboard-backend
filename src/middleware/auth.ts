import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer token

  if (!token) {
    res.status(401).json({ message: "Access denied" });
     return
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded; // Now TypeScript should recognize `user`
    next();
  } catch (error) {
     res.status(403).json({ message: "Invalid token" });
     return
  }
};
