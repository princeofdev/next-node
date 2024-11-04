import { Request, Response, NextFunction } from 'express';
import * as signatureService from '../services/signatureServices';

/**
 * @swagger
 * components:
 *   schemas:
 *     TestMessage:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 */

export const checkServer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await signatureService.getTestMessage();
    res.json(result);
  } catch (error) {
    next(error);
  }
};