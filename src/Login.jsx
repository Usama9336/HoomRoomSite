import React from 'react'
import pattern from './assets/pattern-c.png'
import logo from './assets/logo.png'
import header from './assets/header2.png'
import group from './assets/Group.png'
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
<div >
    <div className='sm:flex sm:items-center sm:m-[8px] sm:w-[80%]  sm:mx-auto'>
<div id='pattern' className='py-[4rem] px-[1.2rem] sm:hidden'>
    <div  className='bg-[white] flex flex-col space-y-[1rem] py-[2rem] px-[0.1rem] mx-[0.9rem]'>
 <div className='w-[66%] ml-[1.5rem] sm:ml-[0px] sm:w-[48%]'>
 <img src={logo} alt=""/>
 </div>
 <div className=''>
    <div className='sm:ml-[0px] w-[66%] sm:w-[46%] ml-[1.5rem]'>
    <img src={header} alt=""  />
    </div>
<div className='flex flex-col w-[90%] mx-auto sm:mx-[0px] sm:w-[60%] pt-[1rem] space-y-[2rem]'>
    <TextField id="filled-basic" label="Username" variant="filled" />
    <TextField id="filled-basic" label="Email" variant="filled" />
    <Link to='/nextpage'>
    <button className='bg-gradient-to-r w-full from-[#83C44C] to-[#149C78] py-[0.8rem] text-[white]'>
    <div className='w-[28%] mx-auto'>
    <img src={group} alt=""/>
    </div>
    </button>
    </Link>
    
    <div className='flex mx-auto gap-[5px] mt-[3rem] items-center text-center font-normal font-sans'>
    <Link to='/signup'>
    <p className='text-[#616161] hover:cursor-pointer hover:text-[black]  text-[12.8px] font-normal'>Are you a Newbie?</p>
    </Link>
    <p className='text-[black] text-[12.8px] font-bold'> GET STARTED - IT'S FREE</p>
    </div>
 </div>
 </div>
        </div>
        </div>
        <div className='hidden sm:flex flex-col space-y-[1rem]'>
 <div className='w-[66%] ml-[1.5rem] sm:ml-[0px] sm:w-[48%]'>
 <img src={logo} alt=""/>
 </div>
 <div className=''>
    <div className='sm:ml-[0px] w-[66%] sm:w-[46%] ml-[1.5rem]'>
    <img src={header} alt=""  />
    </div>
<div className='flex flex-col w-[90%] mx-auto sm:mx-[0px] sm:w-[60%] pt-[1rem] space-y-[1.8rem]'>
    <TextField id="filled-basic" label="Username" variant="filled" />
    <TextField id="filled-basic" label="Email" variant="filled" />
    <Link to='/nextpage'>
    <button className='bg-gradient-to-r w-full from-[#83C44C] to-[#149C78] py-[0.8rem] text-[white]'>
    <div className='w-[28%] mx-auto'>
    <img src={group} alt=""/>
    </div>
    </button>
    </Link>
    
    <div className='flex mx-auto gap-[5px] mt-[3rem] items-center text-center font-normal font-sans'>
    <Link to='/signup'>
    <p className='text-[#616161] hover:cursor-pointer hover:text-[black]  text-[12.8px] font-normal'>Are you a Newbie?</p>
    </Link>
    <p className='text-[black] text-[12.8px] font-bold'> GET STARTED - IT'S FREE</p>
    </div>
 </div>
 </div>
        </div>
        <div className='w-[46%]  hidden sm:block my-[1rem]'>
            <div className=' '>
<img src={pattern} alt="" className='w-[90%]'/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Login