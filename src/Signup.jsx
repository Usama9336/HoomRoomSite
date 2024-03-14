import React from 'react'
import pattern from './assets/pattern-c.png'
import logo from './assets/logo.png'
import header from './assets/header.png'
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import group from './assets/Group.png'

const Signup = () => {
  return (
<div>
    <div className='flex items-center m-[8px] w-[80%] mx-auto'>

        <div className='flex flex-col space-y-[1rem]'>
 <div className='w-[45%]'>
 <img src={logo} alt=""/>
 </div>
 <div className=''>
    <div className=''>
    <img src={header} alt="" width='48%' />
    </div>
<div className='flex flex-col w-[60%] pt-[1rem] space-y-[2rem]'>
    <TextField id="filled-basic" label="Username" variant="filled" />
    <TextField id="filled-basic" label="Email" variant="filled" />
    <TextField id="filled-basic" label="Mobile" variant="filled" />
    <TextField  type='password' id="filled-basic" label="Password" variant="filled"  />
    <button className=' bg-gradient-to-r from-[#83C44C] to-[#149C78] text-[white] py-[0.8rem]'>
    <div className='w-[25%] mx-auto'>
    <img src={group} alt=""/>
    </div>
    </button>
    <div className='flex mx-auto gap-[5px] mt-[3rem] items-center text-center font-normal font-sans'>
    <p className='text-[#616161] text-[12.8px] font-normal'>Are you a Newbie?</p>
    <p className='text-[black] text-[12.8px] font-bold'> GET STARTED - IT'S FREE</p>
    </div>
 </div>
 </div>
        </div>
        <div className='w-[46%]'>
            <div className=' '>
<img src={pattern} alt="" />
        </div>
        </div>
    </div>
    </div>
  )
}

export default Signup