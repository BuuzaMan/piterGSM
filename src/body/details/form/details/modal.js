import WhiteLogo from '@/svg/mainlogowhite';
import React from 'react'

function ModalWindow({ open, onClose }) {
  if (!open) return null
  return (

    <div className="flex fixed bg-black bg-opacity-30 items-center w-full h-full inset-0 justify-center z-40">
      <div className='bg-gradient-to-r from-[#2E83C2] to-[#70BB44] desktopxl:w-[900px] desktopxl:h-[430px] desktopmd:w-[900px] desktopmd:h-[420px] desktopsm:w-[900px] desktopsm:h-[420px] tablet:w-[900px] tablet:h-[410px] tabletsm:w-[900px] tabletsm:h-[410px] mobilexl:w-[600px] mobilexl:h-[410px] mobilemd:w-[400px] mobilemd:h-[430px] mobilesm:w-[300px] mobilesm:h-[440px] bg-white rounded-[16px]'>
        <div className='flex flex-col mt-[20px] desktopxl:ml-[40px] desktopmd:ml-[40px] desktopsm:ml-[40px] tablet:ml-[40px] tabletsm:ml-[40px] mobilexl:ml-[20px] mobilemd:ml-[20px] mobilesm:ml-[10px] relative'> 
            <WhiteLogo />
            <div className='font-sf font-bold desktopxl:text-[60px] desktopmd:text-[60px] desktopsm:text-[60px] tablet:text-[60px] tabletsm:text-[60px] mobilexl:text-[60px] mobilemd:text-[48px] mobilesm:text-[40px] desktopxl:mt-[0px] desktopmd:mt-[0px] desktopsm:mt-[0px] tablet:mt-[0px] tabletsm:mt-[0px] mobilexl:mt-[0px] mobilemd:mt-[20px] mobilesm:mt-[50px] text-white text-center'>Спасибо</div>
            <div className='font-sf_text text-white text-center desktopxl:text-[16px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px] leading-[1rem]'>Ваша заявка принята в обработку.</div>
            <div className='font-sf_text text-white text-center desktopxl:text-[16px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px] leading-[1rem]'>Наши менеджеры свяжутся с вами в ближайшее время.</div>
            <button onClick={onClose} className='absolute text-[60px] text-white desktopxl:left-[820px] desktopxl:bottom-[120px] desktopmd:left-[820px] desktopmd:bottom-[120px] desktopsm:left-[820px] desktopsm:bottom-[120px] tablet:left-[820px] tablet:bottom-[120px] tabletsm:left-[820px] tabletsm:bottom-[120px] mobilexl:left-[540px] mobilexl:bottom-[120px] mobilemd:left-[340px] mobilemd:bottom-[140px] mobilesm:left-[255px] mobilesm:bottom-[155px]'>×</button>
            <div className='desktopxl:w-[270px] desktopmd:w-[270px] desktopsm:w-[270px] tablet:w-[250px] tabletsm:w-[250px] mobilexl:w-[220px] mobilemd:w-[220px] mobilesm:w-[200px] desktopxl:left-[300px] desktopmd:left-[330px] desktopsm:left-[300px] tablet:left-[300px] tabletsm:left-[300px] mobilexl:left-[200px] mobilemd:left-[80px] mobilesm:left-[40px] desktopxl:top-[190px] desktopmd:top-[180px] desktopsm:top-[180px] tablet:top-[187px] tabletsm:top-[187px] mobilexl:top-[212px] mobilemd:top-[233px] mobilesm:top-[257px] absolute'><img src='images/pngegg.png' alt='saitama' /></div>
        </div>
      </div>
    </div>
  )
};

export default ModalWindow;