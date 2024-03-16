"use client"
import React from 'react'
import Input from './details/input';

const Form = ({ serviceChooseState }) => {
  
  return (
    <div className='desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[552px] desktopmd:h-[552px] desktopsm:h-[536px] tablet:h-[587px] tabletsm:h-[587px] mobilexl:h-[552px] mobilemd:h-[592px] mobilesm:h-[464px]'>
        <div>
            <div className='desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[23px] desktopmd:h-[23px] desktopsm:h-[23px] tablet:h-[23px] tabletsm:h-[23px] mobilexl:h-[23px] mobilemd:h-[23px] mobilesm:h-[15px] font-unbounded font-medium desktopxl:text-[20px] desktopmd:text-[20px] desktopsm:text-[20px] tablet:text-[20px] tabletsm:text-[20px] mobilexl:text-[20px] mobilemd:text-[20px] mobilesm:text-[13px] leading-[1rem] -tracking-[.03em]'>2. Заполните форму и отправьте</div>
            <div className='desktopxl:w-[703px] desktopmd:w-[703px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[19px] desktopmd:h-[19px] desktopsm:h-[19px] tablet:h-[38px] tabletsm:h-[38px] mobilexl:h-[23px] mobilemd:h-[38px] mobilesm:h-[32px] font-golos font-[#2A2B30] font-bold desktopxl:text-[16px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[13px] leading-[1.2rem] -tracking-[.015em] mt-[12px]'>После получения вашей заявки с вами свяжется менеджер для подтверждения</div>
            <Input serviceChooseState={serviceChooseState}/>
            <div className='font-golos desktopxl:text-[13px] desktopmd:text-[13px] desktopsm:text-[13px] tablet:text-[13px] tabletsm:text-[13px] mobilexl:text-[13px] mobilemd:text-[13px] mobilesm:text-[11px] font-medium text-[#C9C9C9] -tracking-[.015em] text-center desktopxl:w-[703px] desktopmd:w-[703px] desktopxl:mt-0 desktopmd:mt-0 desktopsm:mt-[22px] tablet:mt-[22px] tabletsm:mt-[20px] mobilexl:mt-[22px] mobilemd:mt-[22px] mobilesm:mt-[22px]'>Отправляя данную форму, вы соглашаетесь с нашей политикой обработки персональных данных</div>
        </div>
    </div>
  )
}

export default Form;