import React from 'react';
import {BsGearWideConnected,BsFillCloudFog2Fill} from 'react-icons/bs'
const ServerError = () => {
  return <div className='flex flex-col items-center'>
      <BsGearWideConnected size={65} className=' animate-spin' color='#345185' />
      <p className='text-center'>Server is on maintainence please try again later!!</p>
      <p className='text-lg text-center mt-2'>How about you try resizing these windows in the mean time! 
      <span className='font-bold ml-1 text-center'>Its quite fun</span></p>
  </div>;
};

export default ServerError;
