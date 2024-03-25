"use client"
import React from 'react'
import { Link } from 'react-scroll';

const CheckStatusButton = () => {
  return (
    <Link to="checkStatus" spy={true} smooth={true} offset={-50} duration={500}>
      <button className='w-[287px] h-[53px] rounded-[8px] border-[1px] border-[#0D0D0D] font-sf_text text-[13px] font-bold tracking-[.07em] uppercase z-10'>проверить статус ремонта</button>
    </Link>
  )
}

export default CheckStatusButton;