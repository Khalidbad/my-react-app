import React from 'react';

const HeaderBar = () => {
  return (
    <div className="w-full fixed top-0 left-0 bg-sky-700 py-4 px-8 shadow-md z-50">
      <div className="flex justify-between items-center">
        <span className="text-white text-xl font-bold tracking-wide">My Todo App</span>
        <button className="bg-white text-sky-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-sky-100 transition-colors">List</button>
      </div>
    </div>
  );
};

export default HeaderBar;
