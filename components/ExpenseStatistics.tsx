import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseStatistics = () => {
  const data = {
    labels: ['Entertainment', 'Investment', 'Bill Expense', 'Others'],
    datasets: [
      {
        data: [30, 20, 15, 35],
        backgroundColor: [
          'rgb(59, 130, 246)',
          'rgb(99, 102, 241)',
          'rgb(249, 115, 22)',
          'rgb(17, 24, 39)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Expense Statistics</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpenseStatistics; 