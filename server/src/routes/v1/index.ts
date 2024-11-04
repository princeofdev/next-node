import express from 'express';
import signatureRoutes from './signatureRoutes';

const router = express.Router();

router.use('/signature', signatureRoutes);

export default router;