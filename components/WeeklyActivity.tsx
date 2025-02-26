import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyActivity = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
      },
    },
  };

  const labels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Withdraw',
        data: [450, 300, 250, 380, 150, 350, 300],
        backgroundColor: 'rgb(0, 0, 0)',
      },
      {
        label: 'Deposit',
        data: [200, 150, 300, 250, 200, 250, 300],
        backgroundColor: 'rgb(59, 130, 246)',
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Weekly Activity</h2>
      <Bar options={options} data={data} height={100} />
    </div>
  );
};

export default WeeklyActivity; 