import Transaction from '../models/Transaction';

interface Request {
  title: string;

  value: number;

  type: string;
}
class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance() {}

  public create({ title, value, type }: Request): Transaction {
    const CreateTransactions = new Transaction({ title, value, type });
    this.transactions.push(CreateTransactions);
    return CreateTransactions;
  }
}

export default TransactionsRepository;
