"use client"
import { getOrder } from '@/app/actions';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import Modal from './modal';
import InputMask from 'react-input-mask';

const CheckInput = () => {
  const { register, handleSubmit, formState:{errors}, reset, control } = useForm({ mode:'all' });
  const [isOpen, setIsOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);
  

  const onSubmit = async(data) => {
    const res = await getOrder(data.number)
    console.log(res)
    setOrderStatus(res)
    reset()
    setIsOpen(true)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex desktopxl:flex-row desktopmd:flex-row desktopsm:flex-row tablet:flex-row tabletsm:flex-row mobilexl:flex-col mobilemd:flex-col mobilesm:flex-col desktopxl:w-[1759px] desktopxl:h-[99px] relative mt-[10px]'>
      <label className='flex desktopxl:flex-row desktopmd:flex-row desktopsm:flex-row tablet:flex-row tabletsm:flex-row mobilexl:flex-col mobilemd:flex-col mobilesm:flex-col desktopxl:w-[1319px]'>
        <Controller
          name='number'
          control={control}
          defaultValue=""
          rules={{
            required: "Поле обязательно для заполнения",
            pattern: {
              value: /^[A-Z]\d{6}$/,
              message: 'Пожалуйста, введите шесть цифр после символа А'
            },
            minLength: {
              value: 7,
              message: 'Минимальное количество символов 7'
            }
          }}
          render={({ field }) => (
            <InputMask
              mask="A999999"
              maskChar={null}
              type='text'
              {...field}
              className='desktopxl:w-[1319px] desktopmd:w-[959px] desktopsm:w-[834px] tablet:w-[674px] tabletsm:w-[498px] mobilexl:w-[688px] mobilemd:w-[400px] mobilesm:w-[320px] desktopxl:h-[99px] desktopmd:h-[99px] desktopsm:h-[99px] tablet:h-[99px] tabletsm:h-[99px] mobilexl:h-[99px] mobilemd:h-[68px] mobilesm:h-[52px] rounded-[8px] bg-[#F6F6F6] placeholder:font-sf placeholder:font-bold desktopxl:placeholder:text-[36px] desktopmd:placeholder:text-[36px] desktopsm:placeholder:text-[36px] tablet:placeholder:text-[36px] tabletsm:placeholder:text-[36px] mobilexl:placeholder:text-[36px] mobilemd:placeholder:text-[36px] mobilesm:placeholder:text-[15px] placeholder:text-[#B4B4B4] placeholder:leading-[1.13rem] placeholder:tracking-[.015em] desktopxl:pl-[36px] desktopmd:pl-[36px] desktopsm:pl-[36px] tablet:pl-[36px] tabletsm:pl-[36px] mobilexl:pl-[36px] mobilemd:pl-[36px] mobilesm:pl-[20px] outline-none desktopxl:text-[36px] desktopmd:text-[36px] desktopsm:text-[36px] tablet:text-[36px] tabletsm:text-[36px] mobilexl:text-[36px] mobilemd:text-[36px] mobilesm:text-[15px] font-sf font-bold'
              placeholder='A000000' 
            />
          )}
        />       
      </label>
      <button 
        type='submit'
        className='desktopxl:w-[422px] desktopxl:h-[99px] desktopmd:w-[422px] desktopsm:w-[345px] tablet:w-[349px] tabletsm:w-[349px] mobilexl:w-[688px] mobilemd:w-[400px] mobilesm:w-[320px] desktopxl:h-[99px] desktopmd:h-[99px] desktopsm:h-[99px] tablet:h-[99px] tabletsm:h-[99px] mobilexl:h-[99px] mobilemd:h-[68px] mobilesm:h-[53px] rounded-[8px] border-[1px] border-[#FFFFFF] desktopxl:ml-[18px] desktopmd:ml-[18px] desktopsm:ml-[18px] tablet:ml-[18px] tabletsm:ml-[18px] mobilexl:ml-0 desktopxl:mt-0 desktopmd:mt-0 desktopsm:mt-0 tablet:mt-0 tabletsm:mt-0 mobilexl:mt-[18px] mobilemd:mt-[18px] mobilesm:mt-[18px] text-[#FFFFFF] desktopxl:text-[20px] desktopmd:text-[20px] desktopsm:text-[20px] tablet:text-[20px] tabletsm:text-[20px] mobilexl:text-[20px] mobilemd:text-[20px] mobilesm:text-[15px] font-sf_text font-bold uppercase'>
        проверить статус
      </button>
      <div className='absolute z-10 font-sf_text font-normal desktopxl:text-[14px] desktopmd:text-[14px] desktopsm:text-[14px] tablet:text-[14px] tabletsm:text-[14px] mobilexl:text-[12px] mobilemd:text-[12px] mobilesm:text-[12px] text-orange-200 desktopxl:top-[100px] desktopmd:top-[100px] desktopsm:top-[100px] tablet:top-[100px] tabletsm:top-[100px] mobilexl:top-[98px] mobilemd:top-[68px] mobilesm:top-[52px]'>{errors?.number && <p>{errors?.number?.message}</p>}</div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} orderStatus={orderStatus} />
    </form>
  )
}

export default CheckInput;