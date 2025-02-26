'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
// import Link from 'next/link';

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - Hide on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      <div className="flex-1">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b bg-white">
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Setting</h1>
          <div className="w-10 h-10 rounded-full overflow-hidden relative">
            <Image
              src="/images/avatar.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 md:p-8">
          {/* Search Bar - Mobile Only */}
          <div className="md:hidden mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for something"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-8">
            {/* Settings Navigation */}
            <div className="flex gap-4 md:gap-8 border-b mb-6 md:mb-8 overflow-x-auto">
              <button className="pb-4 border-b-2 border-blue-600 font-medium text-blue-600 whitespace-nowrap">
                Edit Profile
              </button>
              <button className="pb-4 text-gray-500 hover:text-gray-700 whitespace-nowrap">
                Preferences
              </button>
              <button className="pb-4 text-gray-500 hover:text-gray-700 whitespace-nowrap">
                Security
              </button>
            </div>

            {/* Profile Form */}
            <div className="max-w-3xl">
              {/* Profile Picture */}
              <div className="mb-8 flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden relative">
                    <Image
                      src="/images/avatar.jpg"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
              <div className="mt-8">
                <button className="w-full md:w-auto px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 