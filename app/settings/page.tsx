'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="bg-white rounded-xl p-8">
          {/* Settings Navigation */}
          <div className="flex gap-8 border-b mb-8">
            <button className="pb-4 border-b-2 border-blue-600 font-medium text-blue-600">
              Edit Profile
            </button>
            <button className="pb-4 text-gray-500 hover:text-gray-700">
              Preferences
            </button>
            <button className="pb-4 text-gray-500 hover:text-gray-700">
              Security
            </button>
          </div>

          {/* Profile Form */}
          <div className="max-w-3xl">
            {/* Profile Picture */}
            <div className="mb-8 relative">
              <div className="w-24 h-24 rounded-full overflow-hidden relative">
                <Image
                  src="/images/avatar.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
                <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  defaultValue="Charlene Reed"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">User Name</label>
                <input
                  type="text"
                  defaultValue="Charlene Reed"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="charlenereed@gmail.com"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  defaultValue="••••••••"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="text"
                  defaultValue="25 January 1990"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Present Address</label>
                <input
                  type="text"
                  defaultValue="San Jose, California, USA"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Permanent Address</label>
                <input
                  type="text"
                  defaultValue="San Jose, California, USA"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  defaultValue="San Jose"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                <input
                  type="text"
                  defaultValue="45962"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <input
                  type="text"
                  defaultValue="USA"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-8 flex justify-end">
              <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 