"use client"
import React from 'react'
import MainLogo from '../svg/mainlogo';
import Maps from './details/map';
import Messengers from './details/messengers';

const Footer = () => {
  return (
    <div className='flex desktopxl:flex-row desktopmd:flex-row desktopsm:flex-row tablet:flex-row tabletsm:flex-row mobilexl:flex-col mobilemd:flex-col mobilesm:flex-col desktopxl:w-[1920px] desktopmd:w-[1600px] desktopsm:w-[1360px] tablet:w-[1200px] tabletsm:w-[1024px] mobilexl:w-[768px] mobilemd:w-[480px] mobilesm:w-[360px] desktopxl:h-[502px] desktopmd:h-[502px] desktopsm:h-[502px] tablet:h-[502px] tabletsm:h-[502px] mobilexl:h-[1004px] mobilemd:h-[920px] mobilesm:h-[613px] desktopxl:mt-[76px] desktopmd:mt-[76px] desktopsm:mt-[76px] tablet:mt-[76px] tabletsm:mt-[76px] mobilexl:mt-[71px] mobilemd:mt-0 mobilesm:mt-0 bg-[#E9E9E9]'>
        <div className='desktopxl:w-[960px] desktopmd:w-[800px] desktopsm:w-[680px] tablet:w-[600px] tabletsm:w-[512px] mobilexl:w-[768px] mobilemd:w-[480px] mobilesm:w-[360px] desktopxl:h-[502px] desktopmd:h-[502px] desktopsm:h-[502px] tablet:h-[502px] tabletsm:h-[502px] mobilexl:h-[502px] mobilemd:h-[477px] mobilesm:h-[290px]'>
            <div className='desktopxl:mt-[72px] desktopxl:ml-[80px] desktopmd:mt-[72px] tablet:mt-[72px] tabletsm:mt-[40px] mobilexl:mt-[60px] mobilemd:mt-[72px] desktopmd:ml-[80px] desktopsm:mt-[72px] desktopsm:ml-[40px] tablet:ml-[40px] tabletsm:ml-[40px] mobilexl:ml-[40px] mobilemd:ml-[20px] mobilesm:ml-[20px] mobilesm:mt-[32px]'>
                <p className='font-sf_text font-semibold desktopxl:text-[32px] desktopmd:text-[32px] desktopsm:text-[32px] tablet:text-[32px] tabletsm:text-[32px] mobilexl:text-[32px] mobilemd:text-[30px] mobilesm:text-[26px] uppercase bg-gradient-to-r from-[#2E84C3] via-[#52A27E] to-[#73BE3B] w-[310px] bg-clip-text text-transparent desktopxl:mb-[20px] desktopmd:mb-[20px] desktopsm:mb-[20px] tablet:mb-[20px] tabletsm:mb-[20px] mobilexl:mb-[20px] mobilemd:mb-[20px] mobilesm:mb-[12px]'>всегда на связи</p>
                <a href="tel:+78122440079" className='font-sf font-extrabold desktopxl:text-[40px] desktopmd:text-[40px] desktopsm:text-[40px] tablet:text-[40px] tabletsm:text-[40px] mobilexl:text-[40px] mobilemd:text-[40px] mobilesm:text-[32px] leading-[1rem] -tracking-[.03em]'>+7 (812) 244 00 79</a>
                <Messengers />
                <MainLogo />
                <div className='font-sf_text font-normal desktopxl:mt-[45px] desktopmd:mt-[90px] desktopsm:mt-[90px] tablet:mt-[90px] tabletsm:mt-[130px] mobilexl:mt-[100px] mobilemd:mt-[40px] mobilesm:mt-[25px] text-gray-400 desktopxl:text-[12px] desktopmd:text-[12px] desktopsm:text-[12px] tablet:text-[12px] tabletsm:text-[12px] mobilexl:text-[12px] mobilemd:text-[12px] mobilesm:text-[12px]'>© pitergsm.ru, 2024. Все права защищены</div>
            </div>
        </div>
       <div className='desktopxl:w-[960px] desktopxl:h-[502px] desktopmd:w-[800px] desktopmd:h-[502px] desktopsm:w-[680px] desktopsm:h-[502px] tablet:w-[600px] tablet:h-[502px] tabletsm:w-[512px] tabletsm:h-[502px] mobilexl:w-[768px] mobilexl:h-[502px] mobilemd:w-[480px] mobilemd:h-[520px] mobilesm:w-[360px] mobilesm:h-[323px]'><Maps /></div>
    </div>
  )
}

export default Footer;