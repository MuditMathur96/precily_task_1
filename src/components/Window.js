import { Resizable } from 're-resizable';
import React from 'react';

const Window = ({title,children,defaultSize}) => {
  return(
   
    <Resizable minWidth="150px" 
    defaultSize={defaultSize}
    maxWidth='80vw'
    minHeight='100px'
    
    className='resize  m-1 shadow-sm'>
    <div className=' w-full bg-slate-200 rounded-t-lg px-2 py-1 flex justify-between content-center  l'>
    <div className="text-slate-500">
        {title}
    </div>
    <div className='flex content-center pt-1'>
      <div className='mr-1 h-4 w-4 bg-red-200 rounded-full'></div>
      <div className=' mr-1 h-4 w-4 bg-slate-400 rounded-full'></div>
     
    </div>
    </div>

    <div className='window-content border   text-slate-700 px-2 py-5 overflow-auto'>
        {children}
    </div>
    </Resizable>
    )
  
  
};

export default Window;
