import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex-1">
        <div className="flex justify-center">
          <div className='px-4'>Home</div>
          <div className='px-4'>Dash Board</div>
          <div className='px-4'>Products</div>
          <div className='px-4'>Transactions</div>
          <div className='px-4'>Journal</div>
        </div>
      </div>
      <div className="">Right Content</div>
    </div>
  );
};

export default Navbar;
