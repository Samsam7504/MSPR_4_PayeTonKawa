import express from 'express';
import ordersRouter from './routes/orders';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/orders', ordersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
