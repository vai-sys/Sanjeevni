



import React from 'react'
import { GrYoga } from "react-icons/gr";
import { RiPlantFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import {  useNavigate,Link } from 'react-router-dom';
import Navbar from './Navbar';


const Home = () => {
  const navigate=useNavigate();


  return (
    <>


<div class="fixed top-0 left-0 w-full h-16 z-10">
  <Navbar/>
</div>
<div class="fixed top-16 left-0 w-full h-full">
  <div class="absolute inset-0  opacity-80 flex items-center justify-center text bg-gray-700">
    <div class=" text-center">
      <h1 class="text-7xl font-bold  text-zinc-50">Sanjeevni</h1>
      <p class="mt-2 text-3xl text-zinc-50">where nature nurtures health.</p>

      <div className='flex items-center justify-center mt-9'>
        <Link  to='/aiguide' className='px-4 py-3 font-bold text-zinc-50 transition duration-300 ease-in-out bg-green-500 rounded-md shadow-md border-zinc-50'
         
        >
          Take AI Guide
        </Link>
      </div>


      
      <div className='flex items-center justify-center mt-16 '>
        <div className='flex flex-col justify-between w-1/5 p-8 bg-white border-2 rounded-md shadow-md mr-9 h-60 cursor-pointer' onClick={() => navigate('/ayurvedicPractices')}>
          <div className='flex items-center justify-center'>
          <p className='p-3 text-2xl font-medium text-white bg-green-500 rounded-full'><GrYoga /></p>
          </div>
          <div className='flex flex-col items-center justify-center max-w-xs'>
          <p className='font-semibold text-black cursor-pointer '>
            Ayurvedic Self Care Practices
          </p>
         <p className='text-sm leading-relaxed text-black'>Dive into natural remedies and yoga practices that support overall well-being.</p>
          </div>
        </div>
        
        
        <div className='flex flex-col justify-between w-1/5 p-8  border-2 rounded-md shadow-md h-60 mr-9 ml-9 cursor-pointer bg-white' onClick={()=>navigate('/remedies')}>
        <div className='flex items-center justify-center'>
        <p className='p-3 text-2xl font-medium text-white bg-green-500  rounded-full '><RiPlantFill /></p>
        </div>
         <div className='flex flex-col items-center justify-center max-w-xs'>
         <Link className='font-semibold text-black ' to='/ayurvedicPractices'>  
           Ayurvedic Remedies
          </Link>
          <p className='ml-6 text-sm leading-relaxed text-black'>Discover time-tested herbs, therapies, and lifestyle practices for optimal health and wellness.</p>
         </div>
        </div>
        
        
        
        
        <div className='flex flex-col justify-between w-1/5 p-8 bg-white border-2 rounded-md shadow-md h-60 mr-9 cursor-pointer' onClick={()=>navigate('/community')}>
         <div className='flex items-center justify-center'>
         <p className='p-3 text-2xl font-medium text-white bg-green-500 rounded-full '><IoIosPeople /></p></div>
          <div className='flex flex-col items-center justify-center max-w-xs'>
          <p className='font-semibold text-black '>Join Our Comunity
          </p>
          <p className='ml-6 text-sm leading-relaxed text-black-500'>Connect with like-minded individuals, share experiences, and discover transformative practices together.</p>
          </div></div>
      </div>

    </div>
  </div>
  <img src='https://i.pinimg.com/564x/c4/d0/51/c4d051eb143d8ece3d7f7f6fa0514ec0.jpg' alt="Ayurveda" class="w-full h-full object-cover" />
  {/* <img src='https://i.pinimg.com/564x/37/53/b2/3753b2771ade4230fce08d6e1863d680.jpg' alt="Ayurveda" class="w-full h-full object-cover" /> */}
</div>
    
    
  


  
    





     
   

     
    

      
    </>
  )
}

export default Home

