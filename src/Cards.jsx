import React from 'react'
import up from './assets/Up.png'

const Cards = ({title,newprice,oldprice,difference}) => {
  return (
    <div className='shadow-xl w-[31%] py-[0.5rem] rounded-xl'>
<p className='ml-[1rem] text-[20px] font-bold text-[#404040]'>{title}</p>
<div className='p-[1rem]'>
<div className='flex text-[#565656] justify-between text-[16px] font-normal'>
    <div>
    <p className='text-[13px] text-[#565656] font-bold'>Old</p>
    <p className='text-[16px] font-normal mt-[0.3rem] bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text '>{newprice}</p>
    </div>
    <div>
        <div className='flex'>
    <p className='text-[13px] text-[#565656] font-bold'>New</p>
    <div className='mt-[1px] '>
    <img src={up} alt="" />
    </div>
    </div>
    <p className='text-[16px] font-normal mt-[0.3rem] bg-gradient-to-r from-[#D00000] to-[#C30000] inline-block text-transparent bg-clip-text'>{oldprice}</p>
    </div>
    <div>
    <p className='text-[13px] text-[#565656] font-bold'>Difference</p>
    <p className='text-[16px] font-normal mt-[0.3rem]'>{difference}</p>
    </div>
</div>
</div>
    </div>
  )
}

export default Cards