import React from 'react';

const transactions = [
  {
    id: 1,
    name: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
    icon: '💳',
  },
  {
    id: 2,
    name: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    icon: '🅿️',
  },
  {
    id: 3,
    name: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    icon: '👤',
  },
];

const RecentTransactions = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Transaction</h2>
      
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-lg">{transaction.icon}</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">{transaction.name}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span className={`font-medium ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions; 