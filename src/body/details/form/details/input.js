import { sendForm } from '@/app/actions'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import getServiceString from './serviceString';
import InputMask from 'react-input-mask';
import ModalWindow from './modal';

const Input = ({ serviceChooseState }) => {
  const { 
    register, 
    handleSubmit, 
    formState:{errors},
    reset
  } = useForm( {mode: 'onBlur'});

  const [isOpen, setIsOpen] = useState(false);
  
  const onSubmit = (data) => {
    const serviceString = getServiceString(serviceChooseState);
    console.log(serviceString)
    sendForm({ ...data, service: serviceString });
    reset();
    setIsOpen(true)
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='relative desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] desktopxl:h-[446px] desktopmd:h-[446px] tablet:h-[424px] tabletsm:h-[424px] desktopxl:mt-[36px] desktopmd:mt-[36px] desktopsm:mt-[36px] tablet:mt-[36px] tabletsm:mt-[36px] mobilexl:mt-[36px] mobilemd:mt-[36px] mobilesm:mt-[16px]'>
        <label className='font-sf_text font-medium leading-[1.5rem] -tracking-[.015em]'>
          Ваши имя и фамилия
          <span className='text-orange-500'>*</span>
          <input 
              type='text'
              {...register('name', 
              {required: "Поле обязательно для заполнения"})}
              className='mb-[22px] shadow-lg desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[68px] desktopmd:h-[68px] desktopsm:h-[68px] tablet:h-[68px] tabletsm:h-[68px] mobilexl:h-[68px] mobilemd:h-[68px] mobilesm:h-[52px] rounded-[8px] border-[1px] border-[#E1E1E1] bg-white mt-[6px] placeholder:font-sf_text placeholder:font-medium placeholder:text-[16px] placeholder:text-[#BFBFBF] placeholder:leading-[1.5rem] placeholder:tracking-[.015em] pl-[24px] outline-none'
              placeholder='Александр Александров' >
          </input>
        </label>
        <div className='absolute desktopxl:top-[100px] desktopmd:top-[100px] desktopsm:top-[100px] tablet:top-[100px] tabletsm:top-[100px] mobilexl:top-[100px] mobilemd:top-[100px] mobilesm:top-[85px] font-sf_text text-red-400 text-[12px] tracking-[.001em] z-10'>{errors?.name && <p>{errors?.name?.message}</p>}</div>
        <label className='desktopxl:mt-[22px] desktopmd:mt-[22px] desktopsm:mt-[22px] tablet:mt-[22px] tabletsm:mt-[22px] mobilexl:mt-[22px] mobilemd:mt-[22px] mobilesm:mt-[16px] font-sf_text font-medium leading-[1.5rem] -tracking-[.015em] desktopxl:text-[16px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[13px]'>
          Ваш телефон
          <span className='text-orange-500'>*</span>
          <InputMask 
              mask="+7(999)999-99-99"
              maskChar={null}
              type='tel'
              {...register('phone',
              {required: "Поле обязательно для заполнения",
               minLength: {
                value: 16,
                message: 'Минимальное количество символов 12'
               }
              })}
              className='mb-[22px] shadow-lg desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[68px] desktopmd:h-[68px] desktopsm:h-[68px] tablet:h-[68px] tabletsm:h-[68px] mobilexl:h-[68px] mobilemd:h-[68px] mobilesm:h-[52px] rounded-[8px] border-[1px] border-[#E1E1E1] bg-white mt-[6px] placeholder:font-sf_text font-sf_text placeholder:font-medium placeholder:text-[16px] placeholder:text-[#BFBFBF] placeholder:leading-[1.5rem] placeholder:tracking-[.015em] pl-[24px] outline-none'
              placeholder='+7(9**)***-**-**'
          />
        </label>
        <div className='absolute desktopxl:top-[222px] desktopmd:top-[222px] desktopsm:top-[222px] tabletsm:top-[222px] tablet:top-[222px] mobilexl:top-[222px] mobilemd:top-[222px] mobilesm:top-[195px] font-sf_text text-red-400 text-[12px] tracking-[.001em] z-10'>{errors?.phone && <p>{errors?.phone?.message}</p>}</div>
        <label className='desktopxl:mt-[22px] desktopmd:mt-[22px] desktopsm:mt-[22px] tablet:mt-[22px] tabletsm:mt-[22px] mobilexl:mt-[22px] mobilemd:mt-[22px] mobilesm:mt-[16px] font-sf_text font-medium leading-[1.5rem] -tracking-[.015em] desktopxl:text-[16px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[13px]'>
          Ваше устройство
          <span className='text-orange-500'>*</span>
          <input 
              type='text'
              {...register('device',
              {required: "Введите марку и модель вашего устройства"})}
              className='shadow-lg desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[68px] desktopmd:h-[68px] desktopsm:h-[68px] tablet:h-[68px] tabletsm:h-[68px] mobilexl:h-[68px] mobilemd:h-[68px] mobilesm:h-[52px] rounded-[8px] border-[1px] border-[#E1E1E1] bg-white mt-[6px] placeholder:font-sf_text placeholder:font-medium placeholder:text-[16px] placeholder:text-[#BFBFBF] placeholder:leading-[1.5rem] placeholder:tracking-[.015em] pl-[24px] outline-none'
              placeholder='iPhone 13' >
          </input>
        </label>
        <div className='absolute desktopxl:top-[345px] desktopmd:top-[345px] desktopsm:top-[345px] tablet:top-[345px] tabletsm:top-[345px] mobilexl:top-[345px] mobilemd:top-[345px] mobilesm:top-[298px] font-sf_text text-red-400 text-[12px] tracking-[.001em] z-10'>{errors?.device && <p>{errors?.device?.message}</p>}</div>
        <button type="submit" className='desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[64px] desktopmd:h-[64px] desktopsm:h-[64px] tablet:h-[64px] tabletsm:h-[64px] mobilexl:h-[64px] mobilemd:h-[64px] mobilesm:h-[53px] bg-[#97C61D] text-[#FFFFFF] rounded-[8px] desktopxl:mt-[30px] desktopmd:mt-[22px] desktopsm:mt-[22px] tablet:mt-[22px] tabletsm:mt-[22px] mobilexl:mt-[22px] mobilemd:mt-[22px] mobilesm:mt-[16px] font-sf_text font-semibold desktopxl:text-[18px] desktopmd:text-[18px] desktopsm:text-[18px] tablet:text-[18px] tabletsm:text-[18px] mobilexl:text-[18px] mobilemd:text-[18px] mobilesm:text-[13px] uppercase'>Отправить заявку</button>
        <ModalWindow open={isOpen} onClose={() => setIsOpen(false)} />
    </form>
  );
};

export default Input;