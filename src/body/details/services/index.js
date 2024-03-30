"use client"
import React, { useEffect, useState } from 'react'
import Selector from './details';
import Check from '../../../svg/check';

const Services = ({ onButtonStateChange }) => {
  const [buttonState, setButtonState] = React.useState ({
    displaySelected: false,
    batterySelected: false,
    diagnosticsSelected: false,
    waterDiagSelected: false,
    faceidSelected: false,
    dataSelected: false,
    appInstallSelected: false
  });
  const handleSelectorButtonStateChange = (newButtonStates) => {
    setButtonState(newButtonStates);
  };

  useEffect(() => {
    onButtonStateChange(buttonState);
  }, [buttonState, onButtonStateChange]);
  
  return (
    <div className='desktopxl:w-[781px] desktopmd:w-[670px] desktopsm:w-[620px] tablet:w-[540px] tabletsm:w-[452px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[552px] desktopmd:h-[500px] desktopsm:h-[552px] tablet:h-[552px] tabletsm:h-[552px] mobilexl:h-[296px] mobilemd:h-[340px] mobilesm:h-[283px]'>
        <div>
            <div className='w-[238px] h-[23px] font-sf font-bold desktopxl:text-[24px] desktopmd:text-[24px] desktopsm:text-[24px] tablet:text-[24px] tabletsm:text-[24px] mobilexl:text-[24px] mobilemd:text-[24px] mobilesm:text-[18px] leading-[1.13rem] -tracking-[.03em]'>1. Выберите услугу</div>
            <Selector onButtonStateChange={handleSelectorButtonStateChange} />
            <div className='items-center bg-gray-100 desktopxl:w-[360px] desktopmd:w-[360px] desktopsm:w-[360px] tablet:w-[360px] tabletsm:w-[360px] mobilexl:w-[688px] mobilemd:w-[440px] mobilesm:w-[320px] desktopxl:h-[72px] desktopmd:h-[72px] desktopsm:h-[72px] tablet:h-[72px] tabletsm:h-[72px] mobilexl:h-[55px] mobilemd:h-[68px] mobilesm:h-[70px] bg-[#ECECEC] desktopxl:mt-[40px] desktopmd:mt-[40px] desktopsm:mt-[40px] tablet:mt-[40px] tabletsm:mt-[40px] mobilexl:mt-[20px] mobilemd:mt-[20px] mobilesm:mt-[20px] flex flex-row bg-white rounded-md'>
                <Check />
                <div className='desktopxl:w-[276px] desktopmd:w-[276px] desktopsm:w-[276px] tablet:w-[276px] tabletsm:w-[276px] mobilexl:w-[569px] mobilemd:w-[348px] mobilesm:w-[220px] desktopxl:h-[36px] desktopmd:h-[36px] desktopsm:h-[36px] tablet:h-[36px] tabletsm:h-[36px] mobilexl:h-[20px] mobilemd:h-[36px] mobilesm:h-[36px] font-sf_text font-medium desktopxl:text-[16px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[13px] leading-[1.12rem] -tracking-[.015em] '>Используем только оригинальные и качественные комплектующие</div>
            </div>
        </div>
    </div>
  )
}

export default Services;