import express from 'express';
import * as signatureController from '../../controllers/signatureController';

const router = express.Router();

/**
 * @swagger
 * /api/v1/signature/ping:
 *   get:
 *     summary: Check server status
 *     tags: [Signature]
 *     responses:
 *       200:
 *         description: Server is running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/ping', signatureController.checkServer);

export default router;