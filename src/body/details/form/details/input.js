import { sendForm } from '@/app/actions'
import React from 'react'
import { useForm } from 'react-hook-form';
import getServiceString from './serviceString';

const Input = ({ serviceChooseState }) => {
  const { 
    register, 
    handleSubmit, 
    formState:{errors},
    reset
  } = useForm( {mode: 'onBlur'});
  
  const onSubmit = (data) => {
    const serviceString = getServiceString(serviceChooseState);
    console.log(serviceString)
    sendForm({ ...data, service: serviceString });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='relative desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] desktopxl:h-[446px] desktopmd:h-[446px] tablet:h-[424px] tabletsm:h-[424px] desktopxl:mt-[36px] desktopmd:mt-[36px] desktopsm:mt-[36px] tablet:mt-[36px] tabletsm:mt-[36px] mobilexl:mt-[36px] mobilemd:mt-[36px] mobilesm:mt-[16px]'>
        <label className='font-golos font-medium leading-[1.5rem] -tracking-[.015em]'>
          Ваши имя и фамилия
          <input 
              type='text'
              {...register('name', 
              {required: "Поле обязательно к заполнению"})}
              className='mb-[22px] shadow-lg desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[68px] desktopmd:h-[68px] desktopsm:h-[68px] tablet:h-[68px] tabletsm:h-[68px] mobilexl:h-[68px] mobilemd:h-[68px] mobilesm:h-[52px] rounded-[8px] border-[1px] border-[#E1E1E1] bg-white mt-[6px] placeholder:font-golos placeholder:font-medium placeholder:text-[16px] placeholder:text-[#BFBFBF] placeholder:leading-[1.5rem] placeholder:tracking-[.015em] pl-[24px] outline-none'
              placeholder='Александр Александров' >
          </input>
        </label>
        <div className='absolute top-[100px] font-oswald text-red-500 text-[14px]'>{errors?.name && <p>{errors?.name?.message}</p>}</div>
        <label className='desktopxl:mt-[22px] desktopmd:mt-[22px] desktopsm:mt-[22px] tablet:mt-[22px] tabletsm:mt-[22px] mobilexl:mt-[22px] mobilemd:mt-[22px] mobilesm:mt-[16px] font-golos font-medium leading-[1.5rem] -tracking-[.015em] desktopxl:text-[16px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[13px]'>
          Ваш телефон
          <input 
              type='tel'
              {...register('phone',
              {required: "Поле обязательно к заполнению",
               minLength: {
                value: 12,
                message: 'Минимальное количество символов 12'
               },
               maxLength: {
                value: 13,
                message: 'Превышено максимальное количество символов'
               },
               pattern:{
                value: /^\+79\d{0,9}$/,
                message: "Пожалуйста введите ваш номер телефона в формате +79*********"
              }
              })}
              className='mb-[22px] shadow-lg desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[68px] desktopmd:h-[68px] desktopsm:h-[68px] tablet:h-[68px] tabletsm:h-[68px] mobilexl:h-[68px] mobilemd:h-[68px] mobilesm:h-[52px] rounded-[8px] border-[1px] border-[#E1E1E1] bg-white mt-[6px] placeholder:font-golos placeholder:font-medium placeholder:text-[16px] placeholder:text-[#BFBFBF] placeholder:leading-[1.5rem] placeholder:tracking-[.015em] pl-[24px] outline-none'
              placeholder='+7 (9**) ***-****' >
          </input>
        </label>
        <div className='absolute top-[222px] font-oswald text-red-500 text-[14px]'>{errors?.phone && <p>{errors?.phone?.message}</p>}</div>
        <label className='desktopxl:mt-[22px] desktopmd:mt-[22px] desktopsm:mt-[22px] tablet:mt-[22px] tabletsm:mt-[22px] mobilexl:mt-[22px] mobilemd:mt-[22px] mobilesm:mt-[16px] font-golos font-medium leading-[1.5rem] -tracking-[.015em] desktopxl:text-[16px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[13px]'>
          Ваше устройство
          <input 
              type='text'
              {...register('device',
              {required: "Пожалуйста введите марку и модель вашего устройства"})}
              className='shadow-lg desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[68px] desktopmd:h-[68px] desktopsm:h-[68px] tablet:h-[68px] tabletsm:h-[68px] mobilexl:h-[68px] mobilemd:h-[68px] mobilesm:h-[52px] rounded-[8px] border-[1px] border-[#E1E1E1] bg-white mt-[6px] placeholder:font-golos placeholder:font-medium placeholder:text-[16px] placeholder:text-[#BFBFBF] placeholder:leading-[1.5rem] placeholder:tracking-[.015em] pl-[24px] outline-none'
              placeholder='iPhone 13' >
          </input>
        </label>
        <div className='absolute top-[340px] font-oswald text-red-500 text-[14px]'>{errors?.device && <p>{errors?.device?.message}</p>}</div>
        <button type="submit"  className='desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[64px] desktopmd:h-[64px] desktopsm:h-[64px] tablet:h-[64px] tabletsm:h-[64px] mobilexl:h-[64px] mobilemd:h-[64px] mobilesm:h-[53px] bg-[#97C61D] text-[#FFFFFF] rounded-[8px] desktopxl:mt-[30px] desktopmd:mt-[22px] desktopsm:mt-[22px] tablet:mt-[22px] tabletsm:mt-[22px] mobilexl:mt-[22px] mobilemd:mt-[22px] mobilesm:mt-[16px] font-oswald desktopxl:text-[18px] desktopmd:text-[18px] desktopsm:text-[18px] tablet:text-[18px] tabletsm:text-[18px] mobilexl:text-[18px] mobilemd:text-[18px] mobilesm:text-[13px] uppercase'>Отправить заявку</button>
    </form>
  );
};

export default Input;