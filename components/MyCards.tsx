import React from 'react';

const CreditCard = ({ isLight = false }: { isLight?: boolean }) => {
  return (
    <div className={`relative w-96 h-56 rounded-2xl p-6 ${isLight ? 'bg-white' : 'bg-gray-900'}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className={`text-sm ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Balance</p>
          <p className={`text-2xl font-semibold mt-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>$5,756</p>
        </div>
        <div className="w-12 h-12">
          <svg viewBox="0 0 24 24" className={isLight ? 'text-gray-800' : 'text-white'}>
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </div>
      </div>
      
      <div className="mt-8">
        <p className={`text-lg ${isLight ? 'text-gray-800' : 'text-white'}`}>3778 **** **** 1234</p>
      </div>
      
      <div className="absolute bottom-6 w-[calc(100%-3rem)] flex justify-between items-center">
        <div>
          <p className={`text-sm ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>CARD HOLDER</p>
          <p className={`text-sm font-medium mt-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>Eddy Cusuma</p>
        </div>
        <div>
          <p className={`text-sm ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>VALID THRU</p>
          <p className={`text-sm font-medium mt-1 ${isLight ? 'text-gray-800' : 'text-white'}`}>12/22</p>
        </div>
      </div>
    </div>
  );
};

const MyCards = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">My Cards</h2>
        <button className="text-blue-600 text-sm font-medium">See All</button>
      </div>
      
      <div className="flex gap-6 overflow-x-auto pb-4">
        <CreditCard />
        <CreditCard isLight />
      </div>
    </div>
  );
};

export default MyCards; 