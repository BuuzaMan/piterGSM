"use client"
import React from 'react'
import CheckInput from './details';

const CheckStatusBar = () => {
  return (
    <div id='checkStatus' className='desktopxl:w-[1878px] desktopmd:w-[1519px] desktopsm:w-[1281px] tablet:w-[1121px] tabletsm:w-[945px] mobilexl:w-[768px] mobilemd:w-[480px] mobilesm:w-[360px] desktopxl:h-[312px] desktopmd:h-[312px] desktopsm:h-[312px] tablet:h-[312px] tabletsm:h-[312px] mobilexl:h-[429px] mobilemd:h-[344px] mobilesm:h-[288px] bg-gradient-to-r from-[#97C61D] to-[#20C79F] desktopxl:rounded-[12px] desktopmd:rounded-[12px] desktopsm:rounded-[12px] tablet:rounded-[12px] tabletsm:rounded-[12px] mobilexl:rounded-0 mobilemd:rounded-0 mobilesm:rounded-0'>
        <div className='desktopxl:mt-[56px] desktopmd:mt-[56px] desktopsm:mt-[56px] tablet:mt-[40px] tabletsm:mt-[56px] mobilexl:mt-[56px] mobilemd:mt-[36px] mobilesm:mt-[24px] desktopxl:ml-[60px] desktopmd:ml-[60px] desktopsm:ml-[60px] tablet:ml-[40px] tabletsm:ml-[40px] mobilexl:ml-[40px] mobilemd:ml-[40px] mobilesm:ml-[20px]'>
            <div className='font-sf text-[#F8F8F8] font-bold desktopxl:w-[1759px] desktopxl:h-[36px] desktopmd:w-[1399px] desktopmd:h-[36px] desktopsm:w-[1201px] desktopsm:h-[36px] tablet:w-[1041px] tablet:h-[36px] tabletsm:w-[865px] tabletsm:h-[36px] mobilexl:w-[688px] mobilexl:h-[36px] mobilemd:w-[280px] mobilemd:h-[54px] mobilesm:w-[220px] mobilesm:h-[36px] desktopxl:text-[32px] desktopmd:text-[32px] desktopsm:text-[32px] tablet:text-[32px] tabletsm:text-[32px] mobilexl:text-[32px] mobilemd:text-[24px] mobilesm:text-[16px] desktopxl:leading-[1.8rem] desktopmd:leading-[1.8rem] desktopsm:leading-[1.8rem] tablet:leading-[1.8rem] tabletsm:leading-[1.8rem] mobilexl:leading-[1.8rem] mobilemd:leading-[1.8rem] mobilesm:leading-[1.2rem] uppercase -tracking-[.03em]'>проверка статуса заказа</div>
            <div className='desktopxl:mt-[26px] desktopmd:mt-[26px] desktopsm:mt-[26px] tablet:mt-[0px] tabletsm:mt-[26px] mobilexl:mt-[15px] mobilemd:mt-[15px] mobilesm:mt-[15px] font-golos font-medium desktopxl:text-[20px] desktopmd:text-[20px] desktopsm:text-[20px] tablet:text-[20px] tabletsm:text-[20px] mobilexl:text-[20px] mobilemd:text-[16px] mobilesm:text-[13px] -tracking-[.015em] text-[#FFFFFF]'>Введите номер квитанции</div>
            <CheckInput />
        </div>
    </div>
  )
}

export default CheckStatusBar;