import React from 'react';
import Image from 'next/image';
// import dynamic from 'next/dynamic';

const contacts = [
  { id: 1, name: 'Livia Bator', role: 'CEO', image: '/path-to-image-1.jpg' },
  { id: 2, name: 'Randy Press', role: 'Director', image: '/path-to-image-2.jpg' },
  { id: 3, name: 'Workman', role: 'Designer', image: '/path-to-image-3.jpg' },
];

// Use dynamic imports for chart components
// const WeeklyActivity = dynamic(() => import('@/components/WeeklyActivity'), {
//   ssr: false,
// });
// const ExpenseStatistics = dynamic(() => import('@/components/ExpenseStatistics'), {
//   ssr: false,
// });
// const BalanceHistory = dynamic(() => import('@/components/BalanceHistory'), {
//   ssr: false,
// });

const QuickTransfer = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Transfer</h2>
      
      <div className="flex gap-4 mb-6">
        {contacts.map((contact) => (
          <div key={contact.id} className="text-center">
            <div className="w-12 h-12 relative mx-auto mb-2">
              <Image
                src="/images/avatar.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-sm font-medium text-gray-800">{contact.name}</p>
            <p className="text-xs text-gray-500">{contact.role}</p>
          </div>
        ))}
      </div>
      
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Write amount"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200"
        />
        <button className="px-6 py-2 bg-gray-900 text-white rounded-lg flex items-center gap-2">
          Send
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer; 