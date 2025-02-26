import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const BalanceHistory = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 800,
      },
    },
  };

  const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: [300, 400, 600, 800, 400, 300, 600],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Balance History</h2>
      <Line options={options} data={data} />
    </div>
  );
};

export default BalanceHistory; 