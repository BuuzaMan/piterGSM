"use client"
import React from 'react'
import Whatsapp from '../svg/whatsapp';
import Telegram from '../svg/telegram';
import MainLogo from '../svg/mainlogo';
import Maps from './details/map';

const Footer = () => {
  return (
    <div className='flex desktopxl:flex-row desktopmd:flex-row desktopsm:flex-row tablet:flex-row tabletsm:flex-row mobilexl:flex-col mobilemd:flex-col mobilesm:flex-col desktopxl:w-[1920px] desktopmd:w-[1600px] desktopsm:w-[1360px] tablet:w-[1200px] tabletsm:w-[1024px] mobilexl:w-[768px] mobilemd:w-[480px] mobilesm:w-[360px] desktopxl:h-[502px] desktopmd:h-[502px] desktopsm:h-[502px] tablet:h-[502px] tabletsm:h-[502px] mobilexl:h-[1004px] mobilemd:h-[920px] mobilesm:h-[613px] desktopxl:mt-[76px] desktopmd:mt-[76px] desktopsm:mt-[76px] tablet:mt-[76px] tabletsm:mt-[76px] mobilexl:mt-[71px] mobilemd:mt-0 mobilesm:mt-0 bg-[#E9E9E9]'>
        <div className='desktopxl:w-[960px] desktopmd:w-[800px] desktopsm:w-[680px] tablet:w-[600px] tabletsm:w-[512px] mobilexl:w-[768px] mobilemd:w-[480px] mobilesm:w-[360px] desktopxl:h-[502px] desktopmd:h-[502px] desktopsm:h-[502px] tablet:h-[502px] tabletsm:h-[502px] mobilexl:h-[502px] mobilemd:h-[477px] mobilesm:h-[290px]'>
            <div className='desktopxl:mt-[72px] desktopxl:ml-[80px] desktopmd:mt-[72px] tablet:mt-[72px] tabletsm:mt-[40px] mobilexl:mt-[60px] mobilemd:mt-[72px] desktopmd:ml-[80px] desktopsm:mt-[72px] desktopsm:ml-[40px] tablet:ml-[40px] tabletsm:ml-[40px] mobilexl:ml-[40px] mobilemd:ml-[20px] mobilesm:ml-[20px] mobilesm:mt-[32px]'>
                <div className='font-unbounded font-bold desktopxl:text-[32px] desktopmd:text-[32px] desktopsm:text-[32px] tablet:text-[32px] tabletsm:text-[32px] mobilexl:text-[32px] mobilemd:text-[32px] mobilesm:text-[20px] leading-[1rem] -tracking-[.03em]'>+7 (812) 244 00 88</div>
                <div className='font-golos font-normal desktopxl:text-[16px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px] leading-[1.5rem] -tracking-[.015em] desktopxl:mt-[33px] desktopmd:mt-[33px] desktopsm:mt-[33px] tablet:mt-[33px] tabletsm:mt-[33px] mobilexl:mt-[33px] mobilemd:mt-[33px] mobilesm:mt-[24px]'>Call-центр: ПН-ВС 9:00 - 21:00</div>
                <div className='font-golos font-normal desktopxl:text-[16px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px] leading-[1.5rem] -tracking-[.015em] desktopxl:mt-[8px] desktopmd:mt-[8px] desktopsm:mt-[8px] tablet:mt-[8px] tabletsm:mt-[8px] mobilexl:mt-[8px] mobilemd:mt-[8px] mobilesm:mt-[4px]'>Магазин ПН-ВС 11:00 - 19:00</div>
                <div className='flex flex-row desktopxl:gap-x-4 desktopmd:gap-x-4 desktopsm:gap-x-4 tablet:gap-x-4 tabletsm:gap-x-4 mobilexl:gap-x-4 mobilemd:gap-x-4 mobilesm:gap-x-3 desktopxl:mt-[40px] desktopmd:mt-[40px] desktopsm:mt-[40px] tablet:mt-[40px] tabletsm:mt-[40px] mobilexl:mt-[40px] mobilemd:mt-[40px] mobilesm:mt-[24px] desktopxl:mb-[119px] desktopmd:mb-[119px] desktopsm:mb-[119px] tablet:mb-[119px] tabletsm:mb-[119px] mobilexl:mb-[119px] mobilemd:mb-[119px] mobilesm:mb-[56px]'>
                    <Whatsapp />
                    <Telegram />
                </div>
                <MainLogo />
            </div>
        </div>
       <div className='desktopxl:w-[960px] desktopxl:h-[502px] desktopmd:w-[800px] desktopmd:h-[502px] desktopsm:w-[680px] desktopsm:h-[502px] tablet:w-[600px] tablet:h-[502px] tabletsm:w-[512px] tabletsm:h-[502px] mobilexl:w-[768px] mobilexl:h-[502px] mobilemd:w-[480px] mobilemd:h-[520px] mobilesm:w-[360px] mobilesm:h-[323px]'><Maps /></div>
    </div>
  )
}

export default Footer;