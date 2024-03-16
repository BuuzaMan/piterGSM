"use client"
import { getOrder } from '@/app/actions';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Modal from './modal';

const CheckInput = () => {
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);
  

  const onSubmit = async(data) => {
    const res = await getOrder(data.number)
    setOrderStatus(res)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex desktopxl:flex-row desktopmd:flex-row desktopsm:flex-row tablet:flex-row tabletsm:flex-row mobilexl:flex-col mobilemd:flex-col mobilesm:flex-col desktopxl:w-[1759px] desktopxl:h-[99px] mt-[10px]'>
      <label className='flex desktopxl:flex-row desktopmd:flex-row desktopsm:flex-row tablet:flex-row tabletsm:flex-row mobilexl:flex-col mobilemd:flex-col mobilesm:flex-col desktopxl:w-[1319px]'>
        <input 
            type='text'
            {...register('number')}
            className='desktopxl:w-[1319px] desktopmd:w-[959px] desktopsm:w-[834px] tablet:w-[674px] tabletsm:w-[498px] mobilexl:w-[688px] mobilemd:w-[400px] mobilesm:w-[320px] desktopxl:h-[99px] desktopmd:h-[99px] desktopsm:h-[99px] tablet:h-[99px] tabletsm:h-[99px] mobilexl:h-[99px] mobilemd:h-[68px] mobilesm:h-[52px] rounded-[8px] bg-[#F6F6F6] placeholder:font-unbounded placeholder:font-bold desktopxl:placeholder:text-[32px] desktopmd:placeholder:text-[32px] desktopsm:placeholder:text-[32px] tablet:placeholder:text-[32px] tabletsm:placeholder:text-[32px] mobilexl:placeholder:text-[32px] mobilemd:placeholder:text-[32px] mobilesm:placeholder:text-[13px] placeholder:text-[#B4B4B4] placeholder:leading-[1.13rem] placeholder:tracking-[.015em] desktopxl:pl-[36px] desktopmd:pl-[36px] desktopsm:pl-[36px] tablet:pl-[36px] tabletsm:pl-[36px] mobilexl:pl-[36px] mobilemd:pl-[36px] mobilesm:pl-[20px] outline-none desktopxl:text-[32px] desktopmd:text-[32px] desktopsm:text-[32px] tablet:text-[32px] tabletsm:text-[32px] mobilexl:text-[32px] mobilemd:text-[32px] mobilesm:text-[13px] font-unbounded font-bold'
            placeholder='A000000' >
        </input> 
      </label>
      <button
        onClick={() => setIsOpen(true)} 
        type='submit'
        className='desktopxl:w-[422px] desktopxl:h-[99px] desktopmd:w-[422px] desktopsm:w-[345px] tablet:w-[349px] tabletsm:w-[349px] mobilexl:w-[688px] mobilemd:w-[400px] mobilesm:w-[320px] desktopxl:h-[99px] desktopmd:h-[99px] desktopsm:h-[99px] tablet:h-[99px] tabletsm:h-[99px] mobilexl:h-[99px] mobilemd:h-[68px] mobilesm:h-[53px] rounded-[8px] border-[1px] border-[#FFFFFF] desktopxl:ml-[18px] desktopmd:ml-[18px] desktopsm:ml-[18px] tablet:ml-[18px] tabletsm:ml-[18px] mobilexl:ml-0 desktopxl:mt-0 desktopmd:mt-0 desktopsm:mt-0 tablet:mt-0 tabletsm:mt-0 mobilexl:mt-[18px] mobilemd:mt-[18px] mobilesm:mt-[18px] text-[#FFFFFF] desktopxl:text-[13px] desktopmd:text-[13px] desktopsm:text-[13px] tablet:text-[13px] tabletsm:text-[13px] mobilexl:text-[13px] mobilemd:text-[13px] mobilesm:text-[10px] font-druk font-medium uppercase'>
        проверить статус
      </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} orderStatus={orderStatus} />
    </form>
  )
}

export default CheckInput;