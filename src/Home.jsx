import React from 'react'
import './home.css'
import logo from './assets/logo.png'
import { TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import vector from './assets/Vector.png'
import { Link } from 'react-router-dom';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'Product Brand',
    label: 'Product Brand',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


const Home = () => {
  return (
    <div id='background'>
<div className='flex justify-between p-[1rem] items-center'>
    <div className=''>
    <img src={logo} alt="" className='w-[68%] sm:w-[50%]' />
    </div>
    <div className='flex gap-[1.3rem] items-center mr-[1rem]'>
    <Link to="/login">
        <p className='text-[white] text-[18px] font-sans hover:cursor-pointer hidden sm:block '>Login</p>
        <p className='text-[#D00000] bg-[white] mr-[-1.5rem] text-[15px] p-[0.4rem] font-sans hover:cursor-pointer border-[4px] rounded-xl sm:hidden'>Logout</p>
        </Link>
        <Link to="/signup">
    <button className='bg-gradient-to-r from-[#83C44C] to-[#149C78] text-[white] px-[2rem] hidden sm:block shadow-xl'>Sign Up
        </button>
        </Link>
    </div>
</div>
<div className='flex flex-col items-center space-y-[2rem] sm:py-[7rem] py-[4rem] '>
    <div className='flex flex-col items-center text-[white] space-y-[0.5rem] mx-[0.7rem]'>
<p className='font-sans font-medium text-[18px]'>
THE BEST WAY TO
</p>
<p className='font-sans font-bold text-[28px] sm:text-[44px] text-center'>
Compare Prices Of What You Want
</p>
</div>
    <div className='bg-[#303441]  py-[1.2rem]  rounded-xl w-[80%]'>
        <div className=' sm:flex w-[90%] mx-auto justify-between sm:space-y-[0px] space-y-[1rem]'>
        <TextField
          id="outlined-select-currency"
          select
          defaultValue="Product Brand"
          className='rounded-xl sm:w-[23%] bg-[white] w-[100%]'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label} 
            </MenuItem>
          ))}
        </TextField>
    <TextField id="outlined-search" label="Search " type="search" className='rounded-xl w-[100%] sm:w-[58%] bg-[white] ' />
    <Link to="/nextpage">
    <button className='bg-gradient-to-r from-[#83C44C] to-[#149C78] py-[0.9rem] text-[white] mx-[4.5rem] sm:mx-[0px] sm:px-[2.5rem] shadow-xl mt-[1rem] sm:mt-[0px] '>
        <div className='flex gap-[8px] items-center'>
            <div className='w-[20%]'>
        <img src={vector} alt="" />
        </div>
        <p>Search</p>
        </div>
        </button>
        </Link>
        </div>

    </div>
</div>
    </div>
  )
}

export default Home