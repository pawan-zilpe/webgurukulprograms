import React from 'react'
import Linegraph from '../component/Linegraph';
import  RadarChart  from '../component/Radarchart'
import Recent from './Recent';
const Maincontent = () => {
  return (
    <>
    <div className='bg-white ml-3 w-screen h-screen  shadow  text-xs'>
<div className='flex justify-between border-b pb-2 border-b-gray-400' >
  <div className='flex mt-2 justify-start items-center  gap-2'>
   
 <p> 
     <p className='text-sm ml-1' > <i class="fa-solid fa-rocket fa"></i>Good Morning,Tom!</p>
    <p className='text-sm text-slate-400 ml-1'>Tuesday,Aug 21th 2025</p>
 </p>
  </div>
  <div className=' w-max mr-4 rounded-lg flex items-center '><button className='bg-[#d3d3d3] p-1 rounded-lg'>
    <p className='text-xs font-semibold'><i class="fa-solid fa-calendar"></i> prev 6 Months</p>
    </button></div>
</div>


<div className='mt-2 flex justify-around'>


  <div className='w-92  p-2 border border-slate-500'>
    <div className='flex justify-between'>
     <div>
       <p className='text-xs'>Gross Revenue</p>
       <p className='font-bold pb-5'>$120,054.24</p>
     </div>
         <p className='text-xs  bg-green-300/30 text-green-600 font-bold w-max h-5 px-2 rounded-md'>2.75 </p>
    </div>
    <p className='text-xs'>from jan 1th-aug 21th</p>
  </div>
  

  
  <div className='w-92  p-2 border border-slate-500'>
    <div className='flex justify-between'>
     <div>
       <p className='text-xs'>Gross Revenue</p>
       <p className='font-bold pb-5'>$120,054.24</p>
     </div>
         <p className='text-xs  bg-green-300/30 text-green-600 font-bold w-max h-5 px-2 rounded-md'>2.75 </p>
    </div>
    <p className='text-xs'>from jan 1th-aug 21th</p>
  </div>
  
  <div className='w-92  p-2 border border-slate-500'>
    <div className='flex justify-between'>
     <div>
       <p className='text-xs'>Gross Revenue</p>
       <p className='font-bold pb-5'>$120,054.24</p>
     </div>
         <p className='text-xs  bg-green-300/30 text-green-600 font-bold w-max h-5 px-2 rounded-md'>2.75 </p>
    </div>
    <p className='text-xs'>from jan 1th-aug 21th</p>
  </div>

</div>

<div className='flex justify-between gap-5 ml-3 mr-3'>
  <div className=' text-xs w-[66.5%]  border mt-2 '>
  <p className='p-2'><i class="fa-regular fa-user mr-2"></i>Activity</p>
   <Linegraph/> 

</div>


<div className='text-xs w-[32%] border mt-2   '>
  <p className='pl-2 pt-2 text-xs'> <i class="fa-regular fa-eye"></i>Usage</p>

<RadarChart/> 
</div>
</div>
<div className='border p-2 m-3'>
  <p>$ Recent Transction</p>
  <Recent/>
</div>
    </div> 
    </>
    
  )
}

export default Maincontent