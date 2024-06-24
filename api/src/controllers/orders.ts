import { Request, Response } from 'express';
import { Order } from './models/order';
import db from '../db';

export const getOrders = async (req: Request, res: Response) => {
  const [rows] = await db.query('SELECT * FROM orders');
  res.json(rows);
};

export const getOrderById = async (req: Request, res: Response) => {
  const [rows] = await db.query('SELECT * FROM orders WHERE id = ?', [req.params.id]);
  res.json(rows[0]);
};

export const createOrder = async (req: Request, res: Response) => {
  const { customer_id, product_id, quantity } = req.body;
  const [result] = await db.query('INSERT INTO orders (customer_id, product_id, quantity) VALUES (?, ?, ?)', [customer_id, product_id, quantity]);
  res.json({ id: result.insertId, customer_id, product_id, quantity });
};

export const updateOrder = async (req: Request, res: Response) => {
  const { customer_id, product_id, quantity } = req.body;
  await db.query('UPDATE orders SET customer_id = ?, product_id = ?, quantity = ? WHERE id = ?', [customer_id, product_id, quantity, req.params.id]);
  res.json({ id: req.params.id, customer_id, product_id, quantity });
};

export const deleteOrder = async (req: Request, res: Response) => {
  await db.query('DELETE FROM orders WHERE id = ?', [req.params.id]);
  res.status(204).send();
};
