import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/transactions', (request, response) => {
  try {
    const allTransactions = transactionsRepository.all();
    return response.json(allTransactions);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/transactions', (request, response) => {
  try {
    const { title, value, type } = request.body;
    const createTransaction = new CreateTransactionService(
      transactionsRepository,
    );
    const transactions = createTransaction.execute({
      title,
      value,
      type,
    });
    return transactions;
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
