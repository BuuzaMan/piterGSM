"use client"
import React from 'react'
import Arrow from '../../../svg/arrowHead';
import { Link } from 'react-scroll';


const UpperMenu = () => {
  return (
    <div className='flex flex-row justify-center items-center desktopxl:flex desktopmd:flex desktopsm:flex tablet:flex tabletsm:flex mobilexl:flex mobilemd:hidden mobilesm:hidden desktopxl:ml-[129px] desktopmd:ml-[129px] desktopsm:ml-[429px] tablet:ml-[330px] tabletsm:ml-[150px] mobilexl:ml-[160px] mobilemd:ml-0 z-10 desktopxl:text-[10px] desktopmd:text-[10px] desktopsm:text-[10px] tablet:text-[10px] tabletsm:text-[10px] mobilexl:text-[10px] mobilemd:text-[10px] mobilesm:text-[10px]'>
        <div className='font-druk font-medium desktopxl:h-[20px] desktopmd:h-[20px] desktopsm:h-[20px] tablet:h-[20px] tabletsm:h-[20px] uppercase desktopxl:w-[87px] desktopmd:w-[87px] desktopsm:w-[87px] tablet:w-[87px] tabletsm:w-[87px] desktopxl:h-[13px] desktopmd:h-[13px] desktopsm:h-[13px] tablet:h-[13px] tabletsm:h-[13px] desktopxl:block desktopmd:block desktopsm:block tablet:block tabletsm:block mobilexl:hidden'>Все услуги</div>
        <div className='w-[1px] desktopxl:h-[13px] desktopmd:h-[13px] desktopsm:h-[13px] tablet:h-[13px] tabletsm:h-[13px] bg-[#0D0D0D] desktopxl:ml-[37px] desktopmd:ml-[37px] desktopsm:ml-[37px] desktopxl:mr-[37px] desktopmd:mr-[37px] desktopsm:mr-[37px] tablet:ml-[37px] tablet:mr-[37px] tabletsm:ml-[37px] tabletsm:mr-[37px]' />
        <Link to="checkStatus" spy={true} smooth={true} offset={-50} duration={500}>
          <button className='font-druk font-medium desktopxl:h-[20px] desktopmd:h-[20px] desktopsm:h-[20px] tablet:h-[20px] tabletsm:h-[20px] uppercase desktopxl:block desktopmd:block desktopsm:block tablet:block tabletsm:block mobilexl:hidden desktopxl:w-[215px] desktopmd:w-[215px] desktopsm:w-[215px] tablet:w-[215px] tabletsm:w-[215px] desktopxl:h-[13px] desktopmd:h-[13px] desktopsm:h-[13px] tablet:h-[13px] tabletsm:h-[13px] desktopxl:ml-0 desktopmd:ml-0 desktopsm:ml-0 tablet:ml-0 tabletsm:ml-0'>
            проверить статус ремонта
          </button>
        </Link>
        <Link to="checkStatus" spy={true} smooth={true} offset={-50} duration={500}>
          <button className='font-druk font-medium desktopxl:h-[20px] desktopmd:h-[20px] desktopsm:h-[20px] tablet:h-[20px] tabletsm:h-[20px] uppercase desktopxl:hidden desktopmd:hidden desktopsm:hidden tablet:hidden tabletsm:hidden mobilexl:block mobilexl:mr-[37px]'>
            статус ремонта
          </button>
        </Link>
        <div className='w-[1px] desktopxl:h-[13px] desktopmd:h-[13px] desktopsm:h-[13px] tablet:h-[13px] tabletsm:h-[13px] bg-[#0D0D0D] desktopxl:ml-[37px] desktopmd:ml-[37px] desktopsm:ml-[37px] desktopxl:mr-[37px] desktopmd:mr-[37px] desktopsm:mr-[37px] tablet:ml-[37px] tablet:mr-[37px] tabletsm:ml-[37px] tabletsm:mr-[37px]' />
        <Link to="signUp" spy={true} smooth={true} offset={-50} duration={500}>
          <button className='flex flex-row items-center gap-x-[4px] font-druk font-medium uppercase desktopxl:w-[200px] desktopmd:w-[200px] desktopsm:w-[200px] tablet:w-[200px] tabletsm:w-[200px] mobilexl:w-[200px] mobilemd:w-[200px] mobilesm:w-[200px] desktopxl:h-[20px] desktopmd:h-[20px] desktopsm:h-[20px] tablet:h-[20px] tabletsm:h-[20px]'>
            <span>Записаться на ремонт</span>
            <Arrow />
          </button>
        </Link>
    </div>
  )
}

export default UpperMenu;