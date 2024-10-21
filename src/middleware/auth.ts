import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract token if authHeader exists

  if (!token) {
    res.status(401).json({ message: "Access denied" });
    return;  // Stop further execution after sending response
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded;  // Attach the decoded token (user) to the request object
    next();  // Call next() if authentication was successful
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};
