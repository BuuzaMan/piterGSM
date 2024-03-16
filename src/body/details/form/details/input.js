import { sendForm } from '@/app/actions'
import React from 'react'
import { useForm } from 'react-hook-form';
import getServiceString from './serviceString';

const Input = ({ serviceChooseState }) => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    const serviceString = getServiceString(serviceChooseState);
    console.log(serviceString)
    sendForm({ ...data, service: serviceString });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] desktopxl:h-[446px] desktopmd:h-[446px] tablet:h-[424px] tabletsm:h-[424px] desktopxl:mt-[36px] desktopmd:mt-[36px] desktopsm:mt-[36px] tablet:mt-[36px] tabletsm:mt-[36px] mobilexl:mt-[36px] mobilemd:mt-[36px] mobilesm:mt-[16px]'>
        <label className='font-golos font-medium leading-[1.5rem] -tracking-[.015em]'>
          Ваши имя и фамилия
          <input 
              type='text'
              {...register('name')}
              className='mb-[22px] desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[68px] desktopmd:h-[68px] desktopsm:h-[68px] tablet:h-[68px] tabletsm:h-[68px] mobilexl:h-[68px] mobilemd:h-[68px] mobilesm:h-[52px] rounded-[8px] border-[1px] border-[#E1E1E1] bg-white mt-[6px] placeholder:font-golos placeholder:font-medium placeholder:text-[16px] placeholder:text-[#BFBFBF] placeholder:leading-[1.5rem] placeholder:tracking-[.015em] pl-[24px] outline-none'
              placeholder='Александр Александров' >
          </input>
        </label>
        <label className='desktopxl:mt-[22px] desktopmd:mt-[22px] desktopsm:mt-[22px] tablet:mt-[22px] tabletsm:mt-[22px] mobilexl:mt-[22px] mobilemd:mt-[22px] mobilesm:mt-[16px] font-golos font-medium leading-[1.5rem] -tracking-[.015em] desktopxl:text-[16px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[13px]'>
          Ваш телефон
          <input 
              type='tel'
              {...register('phone')}
              className='mb-[22px] desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[68px] desktopmd:h-[68px] desktopsm:h-[68px] tablet:h-[68px] tabletsm:h-[68px] mobilexl:h-[68px] mobilemd:h-[68px] mobilesm:h-[52px] rounded-[8px] border-[1px] border-[#E1E1E1] bg-white mt-[6px] placeholder:font-golos placeholder:font-medium placeholder:text-[16px] placeholder:text-[#BFBFBF] placeholder:leading-[1.5rem] placeholder:tracking-[.015em] pl-[24px] outline-none'
              placeholder='+7 (999) 999-99-99' >
          </input>
        </label>
        <label className='desktopxl:mt-[22px] desktopmd:mt-[22px] desktopsm:mt-[22px] tablet:mt-[22px] tabletsm:mt-[22px] mobilexl:mt-[22px] mobilemd:mt-[22px] mobilesm:mt-[16px] font-golos font-medium leading-[1.5rem] -tracking-[.015em] desktopxl:text-[16px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[13px]'>
          Ваше устройство
          <input 
              type='text'
              {...register('device')}
              className='desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[68px] desktopmd:h-[68px] desktopsm:h-[68px] tablet:h-[68px] tabletsm:h-[68px] mobilexl:h-[68px] mobilemd:h-[68px] mobilesm:h-[52px] rounded-[8px] border-[1px] border-[#E1E1E1] bg-white mt-[6px] placeholder:font-golos placeholder:font-medium placeholder:text-[16px] placeholder:text-[#BFBFBF] placeholder:leading-[1.5rem] placeholder:tracking-[.015em] pl-[24px] outline-none'
              placeholder='iPhone 13' >
          </input>
        </label>
        <button type="submit"  className='desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[64px] desktopmd:h-[64px] desktopsm:h-[64px] tablet:h-[64px] tabletsm:h-[64px] mobilexl:h-[64px] mobilemd:h-[64px] mobilesm:h-[53px] bg-[#97C61D] text-[#FFFFFF] rounded-[8px] desktopxl:mt-[22px] desktopmd:mt-[22px] desktopsm:mt-[22px] tablet:mt-[22px] tabletsm:mt-[22px] mobilexl:mt-[22px] mobilemd:mt-[22px] mobilesm:mt-[16px] font-druk desktopxl:text-[15px] desktopmd:text-[15px] desktopsm:text-[15px] tablet:text-[15px] tabletsm:text-[15px] mobilexl:text-[15px] mobilemd:text-[15px] mobilesm:text-[13px] uppercase'>Отправить заявку</button>
    </form>
  );
};

export default Input;