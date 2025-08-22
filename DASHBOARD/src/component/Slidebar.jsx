import React from 'react'

const Slidebar = () => {
  return (
  <>
<div>
    <div className='bg-white w-62 shadow-md  '>
     <div className='bg-[#f0f0f0] w-60  pt-2 pl-2 '>
 <div className='flex justify-start  items-center gap-3 pb-3 border-b border-slate-300 '>
       <div><img className='size-8 rounded-lg' src="./src/assets/user.jpg" alt="" /></div>
    <p>
        <h1 className='text-sm font-bold text-black'>Tom IS Loading</h1>
        <p className='text-xs font-semibold text-black/60'>tom@hover.dev</p>
    </p>

    <p className='ml-12' >
        <button className='flex mt-3   '>
            <i className="fa-solid fa-angle-up fa-2xs  " style={{color:" #000000;"}}></i>   </button>
           <button>
              <i className="fa-solid fa-angle-down fa-2xs " style={{color:" #000000;"}}></i>
     
           </button>
    </p>
 </div>

<div className='flex justify-between items-center mt-4 mr-1 bg-[#c9c9c9] p-0.6 h-8 rounded-lg'>
    <p className=' '><i class="fa-solid pl-1 fa-magnifying-glass fa-xs" style={{color: "#000000;"}}></i> <input className='    '  type="search" name="" id="" placeholder='Search' /> <button className='font-bold  text-xs bg-white size-5 rounded-md'>K</button></p>
</div>

<div className='flex-col  mt-4  h-[73vh]'>
   <div className='bg-white p-1 rounded-lg mr-1 shadow'> <button className=''> <i class="fa-regular fa-house fa-xs mr-2" style={{color: "#737373;"}}></i>Dashboard</button></div> 
     <div  className='p-1 rounded-lg mr-1 '> <button> <i class="fa-solid fa-users fa-xs mr-2" style={{color: "#737373;"}}></i>Team</button> </div>
      <div  className='p-1 rounded-lg mr-1 '>  <button> <i class="fa-solid fa-paperclip fa-xs mr-2" style={{color: "#737373;"}}></i>Invoices</button> </div>
      <div  className='p-1 rounded-lg mr-1 '>    <button> <i class="fa-solid fa-link fa-xs mr-2" style={{color: "#737373;"}}></i>Integration</button> </div>
      <div  className='p-1 rounded-lg mr-1 '> <button> <i class="fa-solid fa-dollar-sign fa-xs mr-2" style={{color: "#737373;"}}></i>Fiance</button></div>
</div>
</div>
  </div>  
<div className='flex justify-between items-end w-62 px-1'>
    <div >
        <p className='text-sm font-bold'>EnterPrise</p>
        <p className='text-xs text-gray-400 '>Pay as you go</p>
    </div>
    <div ><button className='bg-[#d3d3d3] p-1.5 text-xs mr-2 rounded-lg font-bold'> Support </button></div>
</div>
</div>
  
  </>
  )
}

export default Slidebar