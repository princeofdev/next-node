import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 60000 // 60 seconds
});

export const checkDatabaseConnection = async (): Promise<boolean> => {
  try {
    const connection = await pool.getConnection();
    console.log('Successfully connected to the database.');
    connection.release();
    return true;
  } catch (error) {
    console.error('Unable to connect to the database:');
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      if ('code' in error) console.error('Error code:', (error as any).code);
      if ('errno' in error) console.error('Error number:', (error as any).errno);
      if ('sqlState' in error) console.error('SQL state:', (error as any).sqlState);
      if ('sqlMessage' in error) console.error('SQL message:', (error as any).sqlMessage);
    }
    console.error('Full error object:', error);
    return false;
  }
};

export default pool;