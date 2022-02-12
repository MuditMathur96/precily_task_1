import React from 'react';

const Profile = () => {
  return <div>
      <div className='text-center text-slate-600 font-bold text-md '>
          Profile</div>
      <hr className='mb-5' />
      <div className='border p-3 hover:shadow-md w-64 mx-auto'>
          <div className='mb-2'>Name:{"<UserName>"}</div>
          <div className='mb-2'>License:  Expires in 456 days</div>
          <div className='mb-2'>Last Login:  Few minutes ago</div>
          <div className='mb-2'>Location:  India(IN)</div>
          
      </div>
  </div>;
};

export default Profile;
