import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // Use 'any' for now or define a more specific type if you have one
    }
  }
}
