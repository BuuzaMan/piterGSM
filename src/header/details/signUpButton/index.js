"use client"
import React from 'react'
import ArrowBtn from '../../../svg/arrowBtn';
import { Link } from 'react-scroll';

const SignUpButton = () => {
  return (
    <Link to="signUp" spy={true} smooth={true} offset={-50} duration={500}>
      <button className=' flex w-[290px] h-[53px] items-center justify-center rounded-[8px] bg-[#97C61D] text-white font-druk font-light text-[10px] tracking-[.07em] gap-x-[27px] uppercase'>
          <div>Записаться на ремонт</div>
          <span><ArrowBtn /></span>
      </button>
    </Link>
  )
};

export default SignUpButton;