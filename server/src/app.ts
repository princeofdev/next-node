import express from 'express';
import mainRouter from './routes';
import errorHandler from './middleware/errorHandler';
import { checkDatabaseConnection } from './config/database';
import { swaggerUi, specs } from './config/swagger';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/api', mainRouter);

// Error handling middleware
app.use(errorHandler);

const startServer = async () => {
  try {
    const isConnected = await checkDatabaseConnection();
    if (isConnected) {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } else {
      console.error('Server not started due to database connection failure');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();