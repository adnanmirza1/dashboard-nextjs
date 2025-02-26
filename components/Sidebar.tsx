import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { icon: '🏠', label: 'Dashboard', path: '/dashboard' },
    { icon: '💰', label: 'Transactions', path: '/transactions' },
    { icon: '👤', label: 'Accounts', path: '/accounts' },
    { icon: '📈', label: 'Investments', path: '/investments' },
    { icon: '💳', label: 'Credit Cards', path: '/credit-cards' },
    { icon: '📝', label: 'Loans', path: '/loans' },
    { icon: '⚙️', label: 'Services', path: '/services' },
    { icon: '🎁', label: 'My Privileges', path: '/privileges' },
    { icon: '⚙️', label: 'Setting', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">
      <Link href="/dashboard" className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">S</span>
        </div>
        <span className="text-xl font-bold">Soar Task</span>
      </Link>

      <nav>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg mb-2 ${
              pathname === item.path
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span>{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;