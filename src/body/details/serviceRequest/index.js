"use client"
import React, { useState } from 'react'
import Services from '../services';
import Form from '../form';


const ServiceRequest = () => {
  const [serviceChooseState, setServiceChooseState] = useState(false);

  const handleServiceChoose = (newButtonState) => {
    setServiceChooseState(newButtonState)
  };

  return (
    <div className='grid desktopxl:grid-cols-2 desktopmd:grid-cols-2 desktopsm:grid-cols-2 tablet:grid-cols-2 tabletsm:grid-cols-2 mobilexl:grid-cols-1 mobilemd:grid-cols-1 mobilesm:grid-cols-1 desktopxl:w-[1760px] desktopmd:w-[1444px] desktopsm:w-[1280px] tablet:w-[1120px] tabletsm:w-[944px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:mt-[58px] desktopmd:mt-[58px] desktopsm:mt-[58px] tablet:mt-[58px] tabletsm:mt-[58px] mobilexl:mt-[58px] mobilemd:mt-[32px] mobilesm:mt-[32px] desktopxl:gap-x-[276px] desktopxl:gap-y-0 desktopmd:gap-x-[71.5px] desktopmd:gap-y-0 desktopsm:gap-x-[40px] desktopsm:gap-y-0 tablet:gap-x-[40px] tablet:gap-y-0 tabletsm:gap-x-[40px] tabletsm:gap-y-0 mobilexl:gap-x-0 mobilexl:gap-y-[40px] mobilemd:gap-x-0 mobilemd:gap-y-[40px] desktopxl:mb-[100px] desktopmd:mb-[100px] desktopsm:mb-[100px] tablet:mb-[117.5px] tabletsm:mb-[103px] mobilexl:mb-[64.63px] mobilemd:mb-[59px] mobilesm:mb-[42px]'>
      <Services onButtonStateChange={handleServiceChoose}/>
      <Form serviceChooseState={serviceChooseState}/>
    </div>
  )
}

export default ServiceRequest;