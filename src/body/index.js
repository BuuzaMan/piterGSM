import React from 'react'
import CheckStatusBar from './details/CheckStatusBar';
import ServiceRequest from './details/serviceRequest';

const Body = () => {
  return (
    <div id='signUp' className='desktopxl:w-[1920px] desktopmd:w-[1600px] desktopsm:w-[1360px] tablet:w-[1200px] tabletsm:w-[1024px] mobilexl:w-[768px] mobilemd:w-[480px] mobilesm:w-[360px] desktopxl:h-[1148px] desktopmd:h-[1164px] desktopsm:h-[1164px] tablet:h-[1164px] tabletsm:h-[1251px] mobilexl:h-[1657px] mobilemd:h-[1616px] mobilesm:h-[1217px] flex flex-col items-center'>
        <div className='desktopxl:mt-[41.92px] desktopmd:mt-[58px] desktopsm:mt-[58px] tablet:mt-[40.5px] tabletsm:mt-[107px] mobilexl:mt-[70.32px] mobilemd:mt-[83px] mobilesm:mt-[60px] desktopxl:w-[1760px] desktopmd:w-[1444px] desktopsm:w-[1280px] tablet:w-[1120px] tabletsm:w-[944px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px]'>
          <div className='desktopxl:w-[831px] desktopmd:w-[831px] desktopsm:w-[831px] tablet:w-[831px] tabletsm:w-[831px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[36px] desktopmd:h-[36px] desktopsm:h-[36px] tablet:h-[36px] tabletsm:h-[36px] mobilexl:h-[72px] mobilemd:h-[54px] mobilesm:h-[40px] font-unbounded font-bold desktopxl:text-[32px] desktopmd:text-[32px] desktopsm:text-[32px] tablet:text-[32px] tabletsm:text-[32px] mobilexl:text-[32px] mobilemd:text-[24px] mobilesm:text-[18px] mobilexl:leading-[2.2rem] mobilemd:leading-[1.8rem] mobilesm:leading-[1.3rem] uppercase'>Услуги по ремонту и диагностике</div>
          <div className='desktopxl:w-[781px] desktopmd:w-[781px] desktopsm:w-[781px] tablet:w-[781px] tabletsm:w-[781px] mobilexl:w-[430px] mobilemd:w-[350px] mobilesm:w-[320px] desktopxl:h-[24px] desktopmd:h-[24px] desktopsm:h-[24px] tablet:h-[24px] tabletsm:h-[24px] mobilexl:h-[48px] mobilemd:h-[48px] mobilesm:h-[34px] mt-[24px] font-golos font-medium desktopxl:text-[20px] desktopmd:text-[20px] desktopsm:text-[20px] tablet:text-[20px] tabletsm:text-[20px] mobilexl:text-[20px] mobilemd:text-[16px] mobilesm:text-[13px] mobilexl:leading-[1.5rem] mobilemd:leading-[1.6rem] mobilesm:leading-[1.2rem] -tracking-[.015em]'>Выберите услугу и оставьте заявку, менеджер свяжется с вами в рабочее время</div>
        </div>
        <ServiceRequest />
        <CheckStatusBar />
    </div>
  )
}

export default Body;