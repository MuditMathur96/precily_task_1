import React from 'react';

const Menu = () => {
  return <div>
      <p className='font-bold text-slate-600 text-center' >Menu</p><hr/>
      <li className=' list-none text-center'>
        <ul className='my-1 hover:font-bold cursor-pointer' >Dashboard</ul>
        <ul className='my-1 hover:font-bold cursor-pointer'>Profile</ul>
        <ul className='my-1 hover:font-bold cursor-pointer'>Settings</ul>
        
      </li>
  </div>;
};

export default Menu;

