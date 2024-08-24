import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'





const quickLink01 =[
  {
    path:"/home",
    display:"Home",
  },

  {
    path:"/",
    display:"About Us",
  },

  {
    path:"/services",
    display:"Services",
  },

  {
    path:"/",
    display:"Blog",
  },

  {
    path:"/home",
    display:"Home",
  },
];


const quickLink02 = [
  {
    path:"/find-a-doctor",
    display:"Find a Doctor",
  },
  {
    path:"/",
    display:"Request an Appointment",
  },
  {
    path:"/",
    display:"Find Location",
  },
  {
    path:"/",
    display:"Get a Opinion",
  },
  
];


const quickLink03 = [

  {
    path:"/",
    display:"Donate",
  },
  {
    path:"/contact",
    display:"Conduct Us",
  },

];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
   <footer className='pb-16 pt-10'>
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
        <img src={logo} alt="" style={{ width: '50px', height: '50px' }} />

          <p className='text-[16px] leading-7 font-[400] text-textColor'>Copyright @ {year} developed by Md Ashadus Jaman</p>
        </div>

      </div>

    </div>

   </footer>
  )
}

export default Footer
