'use client';

import React from 'react';
// import dynamic from 'next/dynamic';
import Sidebar from '@/components/Sidebar';
import Overview from '@/components/Overview';
import MyCards from '@/components/MyCards';
import RecentTransactions from '@/components/RecentTransactions';
import QuickTransfer from '@/components/QuickTransfer';
import BalanceHistory from '@/components/BalanceHistory';
import ExpenseStatistics from '@/components/ExpenseStatistics';
import WeeklyActivity from '@/components/WeeklyActivity';

// Dynamically import components that use Chart.js
// const WeeklyActivityComponent = dynamic(() => import('@/components/WeeklyActivity'), {
//   ssr: false,
// });
// const ExpenseStatisticsComponent = dynamic(() => import('@/components/ExpenseStatistics'), {
//   ssr: false,
// });
// const BalanceHistoryComponent = dynamic(() => import('@/components/BalanceHistory'), {
//   ssr: false,
// });

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <Overview />

        <div className="grid grid-cols-12 gap-6">
          {/* Main Content Grid */}
          <div className="col-span-8">
            <MyCards />
            <WeeklyActivity />
            <div className="grid grid-cols-2 gap-6 mt-6">
              <QuickTransfer />
              <BalanceHistory />
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="col-span-4">
            <RecentTransactions />
            <ExpenseStatistics />
          </div>
        </div>
      </div>
    </div>
  );
}