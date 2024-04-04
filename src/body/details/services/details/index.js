"use client"
import React, { useEffect, useState } from 'react'

const Selector = ({ onButtonStateChange }) => {
  const [ displaySelected, setDisplaySelected ] = useState(false);
  const [ batterySelected, setBatterySelected ] = useState(false);
  const [ diagnosticsSelected, setDiagnosticsSelected ] = useState(false);
  const [ waterDiagSelected, setWaterDiagSelected ] = useState(false);
  const [ faceidSelected, setFaceidSelected ] = useState(false);
  const [ dataSelected, setDataSelected ] = useState(false);
  const [ appInstallSelected, setAppInstallSelected ] = useState(false);

  const handleButtonClick = (buttonName) => {
    switch (buttonName) {
      case 'display':
        setDisplaySelected(!displaySelected);
        break;
      case 'battery':
        setBatterySelected(!batterySelected)
        break;
      case 'diagnostics':
        setDiagnosticsSelected(!diagnosticsSelected)
        break;
      case 'water diagnostics':
        setWaterDiagSelected(!waterDiagSelected)
        break;
      case 'Face ID':
        setFaceidSelected(!faceidSelected)
        break;
      case 'Data':
        setDataSelected(!dataSelected)
        break;
      case 'Application install':
        setAppInstallSelected(!appInstallSelected)
        break;
    }
    
  };
    useEffect (() => {
      onButtonStateChange({
        displaySelected,
        batterySelected,
        diagnosticsSelected,
        waterDiagSelected,
        faceidSelected,
        dataSelected,
        appInstallSelected
      })
    },[displaySelected,
      batterySelected,
      diagnosticsSelected,
      waterDiagSelected,
      faceidSelected,
      dataSelected,
      appInstallSelected])

  return (
    <div className='desktopxl:w-[781px] desktopmd:w-[700px] desktopxl:h-[175px] desktopmd:h-[175px] desktopxl:mt-[30px] desktopmd:mt-[30px] desktopsm:mt-[30px] tablet:mt-[30px] tabletsm:mt-[30px] mobilexl:mt-[30px] mobilemd:mt-[30px] mobilesm:mt-[16px] font-sf_text desktopxl:text-[12px] desktopmd:text-[12px] desktopsm:text-[12px] tablet:text-[12px] tabletsm:text-[12px] mobilexl:text-[12px] mobilemd:text-[12px] mobilesm:text-[10px] font-bold uppercase flex flex-wrap desktopxl:gap-y-2 desktopxl:gap-x-2 desktopmd:gap-y-2 desktopmd:gap-x-2 desktopsm:gap-y-2 desktopsm:gap-x-2 tablet:gap-y-2 tablet:gap-x-2 tabletsm:gap-y-2 tabletsm:gap-x-2 mobilexl:gap-y-2 mobilexl:gap-x-2 mobilemd:gap-y-2 mobilemd:gap-x-2 mobilesm:gap-y-[6px] mobilesm:gap-x-[6px] '>
      <button
        className={`tracking-[.04em] desktop:xl:w-[210px] desktopmd:w-[210px] desktopsm:w-[210px] tablet:w-[210px] tabletsm:w-[210px] mobilexl:w-[210px] mobilemd:w-[188px] mobilesm:w-[129px] desktopxl:h-[53px] desktopmd:h-[53px] desktopsm:h-[53px] tablet:h-[53px] tabletsm:h-[45px] mobilexl:h-[45px] mobilesm:h-[26px] mobilemd:h-[45px] rounded-[8px] border-[1px] border-[#C9C9C9] transition duration-300 ease-in-out 
        ${displaySelected ? 'bg-gradient-to-r from-[#2E83C3] via-[#51A182] to-[#6DB949] text-white' : 'bg-[#333438] text-white'} desktopxl:order-1 desktopmd:order-1 desktopsm:order-1 tablet:order-1 tabletsm:order-1 mobilexl:order-1 mobilemd:order-1 mobilesm:order-1 uppercase`}
        onClick={() => handleButtonClick('display')}
      >
        Замена дисплея
      </button>
      <button
        className={`tracking-[.04em] desktopxl:w-[234px] desktopmd:w-[234px] desktopsm:w-[234px] tablet:w-[234px] tabletsm:w-[234px] mobilexl:w-[234px] mobilemd:w-[210px] mobilesm:w-[167px] desktopxl:h-[53px] desktopmd:h-[53px] desktopsm:h-[53px] tablet:h-[53px] tabletsm:h-[45px] mobilexl:h-[45px] mobilemd:h-[45px] mobilesm:h-[26px] rounded-[8px] border-[1px] border-[#C9C9C9] transition duration-300 ease-in-out 
        ${batterySelected ? 'bg-gradient-to-r from-[#2E83C3] via-[#51A182] to-[#6DB949] text-white' : 'bg-[#333438] text-white'} desktopxl:order-2 desktopmd:order-2 desktopsm:order-2 tablet:order-2 tabletsm:order-2 mobilexl:order-2 mobilemd:order-2 mobilesm:order-3 uppercase`}
        onClick={() => handleButtonClick('battery')}
      >
        Замена аккумулятора
      </button>
      <button 
        className={`tracking-[.04em] desktop:xl:w-[210px] desktopmd:w-[210px] desktopsm:w-[210px] tablet:w-[210px] tabletsm:w-[210px] mobilexl:w-[210px] mobilemd:w-[210px] mobilesm:w-[110px] desktopxl:h-[53px] desktopmd:h-[53px] tablet:h-[53px] tabletsm:h-[45px] desktopsm:h-[53px] mobilexl:h-[45px] mobilemd:h-[45px] mobilesm:h-[26px] rounded-[8px] border-[1px] border-[#C9C9C9] transition duration-300 ease-in-out
        ${diagnosticsSelected ? 'bg-gradient-to-r from-[#2E83C3] via-[#51A182] to-[#6DB949] text-white' : 'bg-[#333438] text-white'} desktopxl:order-3 desktopmd:order-3 desktopsm:order-3 tablet:order-3 tabletsm:order-3 mobilexl:order-3 mobilemd:order-3 mobilesm:order-2 uppercase`}
        onClick={() => handleButtonClick('diagnostics')}
      >
        Диагностика
      </button>
      <button className={`tracking-[.04em] desktopxl:w-[392px] desktopmd:w-[392px] desktopsm:w-[392px] tablet:w-[392px] tabletsm:w-[392px] mobilexl:w-[392px] mobilemd:w-[392px] mobilesm:w-[293px] desktopxl:h-[53px] desktopmd:h-[53px] desktopsm:h-[53px] tablet:h-[53px] tabletsm:h-[45px] mobilexl:h-[45px] mobilemd:h-[45px] mobilesm:h-[26px] rounded-[8px] border-[1px] border-[#C9C9C9] transition duration-300 ease-in-out
        ${waterDiagSelected ? 'bg-gradient-to-r from-[#2E83C3] via-[#51A182] to-[#6DB949] text-white' : 'bg-[#333438] text-white'} desktopxl:order-4 desktopmd:order-4 desktopsm:order-7 tablet:order-7 tabletsm:order-7 mobilexl:order-7 mobilemd:order-7 mobilesm:order-7 uppercase`}
        onClick={() => handleButtonClick('water diagnostics')}
      >
        Диагностика после попадания жидкости
      </button>
      <button 
        className={`tracking-[.04em] desktop:xl:w-[210px] desktopmd:w-[210px] desktopsm:w-[210px] tablet:w-[210px] tabletsm:w-[153px] mobilexl:w-[153px] mobilemd:w-[153px] mobilesm:w-[114px] desktopxl:h-[53px] desktopmd:h-[53px] desktopsm:h-[53px] tablet:h-[53px] tabletsm:h-[45px] mobilexl:h-[45px] mobilemd:h-[45px] mobilesm:h-[26px] rounded-[8px] border-[1px] border-[#C9C9C9] transition duration-300 ease-in-out 
        ${faceidSelected ? 'bg-gradient-to-r from-[#2E83C3] via-[#51A182] to-[#6DB949] text-white' : 'bg-[#333438] text-white'} desktopxl:order-5 desktopmd:order-5 desktopsm:order-6 tablet:order-6 tabletsm:order-6 mobilexl:order-6 mobilemd:order-6 mobilesm:order-6 uppercase`}
        onClick={() => handleButtonClick('Face ID')}
      >
        Ремонт FaceID
      </button>
      <button 
        className={`tracking-[.04em] desktop:xl:w-[210px] desktopmd:w-[210px] desktopsm:w-[210px] tablet:w-[210px] tabletsm:w-[210px] mobilexl:w-[210px] mobilemd:w-[210px] mobilesm:w-[130px] desktopxl:h-[53px] desktopsm:h-[53px] desktopmd:h-[53px] tablet:h-[53px] tabletsm:h-[45px] mobilexl:h-[45px] mobilemd:h-[45px] mobilesm:h-[26px] rounded-[8px] border-[1px] border-[#C9C9C9] transition duration-300 ease-in-out 
        ${dataSelected ? 'bg-gradient-to-r from-[#2E83C3] via-[#51A182] to-[#6DB949] text-white' : 'bg-[#333438] text-white'} desktopxl:order-6 desktopmd:order-6 desktopsm:order-4 tablet:order-4 tabletsm:order-4 mobilexl:order-4 mobilemd:order-4 mobilesm:order-4 uppercase`}
        onClick={() => handleButtonClick('Data')}
      >
        Перенос данных
      </button>
      <button className={`tracking-[.04em] desktopxl:w-[247px] desktopmd:w-[247px] desktopsm:w-[247px] tablet:w-[247px] tabletsm:w-[247px] mobilexl:w-[247px] mobilemd:w-[247px] mobilesm:w-[177px]  desktopxl:h-[53px] desktopmd:h-[53px] desktopsm:h-[53px] tablet:h-[53px] tabletsm:h-[45px] mobilexl:h-[45px] mobilemd:h-[45px] mobilesm:h-[26px] rounded-[8px] border-[1px] border-[#C9C9C9] transition duration-300 ease-in-out
        ${appInstallSelected ? 'bg-gradient-to-r from-[#2E83C3] via-[#51A182] to-[#6DB949] text-white' : 'bg-[#333438] text-white'} desktopxl:order-7 desktopmd:order-7 desktopsm:order-5 tablet:order-5 tabletsm:order-5 mobilexl:order-5 mobilemd:order-5 mobilesm:order-5 uppercase`}
        onClick={() => handleButtonClick('Application install')}
      >
        Установка приложений
      </button>
    </div>
  )
}

export default Selector;