import db from '../config/database';
import { Example } from '../types';

export const getTestMessage = async () => {
  return { message: 'pong!' };
};

export const getSignatureByKey = async (keys: string) => {
  const keyArray = keys.split(',');
  const placeholders = keyArray.map(() => '?').join(',');
  const [rows] = await db.query<any[]>(`SELECT \`key\`, html FROM signatures WHERE \`key\` IN (${placeholders})`, keyArray);
  
  const result: Record<string, string> = {};
  rows.forEach(row => {
    result[row.key] = row.html;
  });
  
  return result;
}

export const createExample = async (name: string): Promise<Example> => {
  const [result] = await db.query<any>('INSERT INTO example_table (name) VALUES (?)', [name]);
  return { id: result.insertId, name };
};