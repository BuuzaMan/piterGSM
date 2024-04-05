import React from 'react'
import UpperMenu from './details/upperMenu';
import SignUpButton from './details/signUpButton';
import CheckStatusButton from './details/checkStatusButton';

const Header = () => {
  return (
    <div className='flex flex-col desktopxl:w-[1920px] desktopmd:w-[1600px] desktopsm:w-[1360px] tablet:w-[1200px] tabletsm:w-[1024px] mobilexl:w-[768px] mobilemd:w-[480px] mobilesm:w-[360px] desktopxl:h-[658px] desktopmd:h-[642px] desktopsm:h-[642px] tablet:h-[642px] tabletsm:h-[555px] mobilexl:h-[496px] mobilemd:h-[790px] mobilesm:h-[595px] relative overflow-hidden'>
        <div className='flex flex-row desktopxl:mt-[70px] desktopmd:mt-[70px] desktopsm:mt-[58px] tablet:mt-[55.5px] tabletsm:mt-[44px] mobilexl:mt-[44px] mobilemd:mt-[32px] mobilesm:mt-[32px] desktopxl:ml-[80px] desktopmd:ml-[80px] desktopsm:ml-[80px] tablet:ml-[40px] tabletsm:ml-[40px] mobilexl:ml-[40px] mobilemd:ml-[20px] mobilesm:ml-[20px] desktopxl:h-[34.5px] desktopmd:h-[34.5px] desktopsm:h-[34.5px] tablet:h-[34.5px] tabletsm:h-[34.5px] mobilexl:h-[34.5px] mobilesm:h-[23px]'>
            <div className='w-[160px] z-40'><img src='images/logo.png' alt='mainlogo' /></div>
            <UpperMenu />
        </div>
        <div className='desktopxl:w-[750px] desktopmd:w-[700px] desktopsm:w-[600px] tablet:w-[600px] tabletsm:w-[450px] mobilexl:w-[380px] mobilemd:w-[330px] mobilesm:w-[300px] desktopxl:h-[145px] desktopmd:h-[145px] desktopsm:h-[140px] tablet:h-[140px] tabletsm:h-[96px] mobilexl:h-[81px] mobilemd:h-[144px] mobilesm:h-[108px] font-sf font-bold tracking-[.001em] desktopxl:text-[48px] desktopmd:text-[40px] desktopsm:text-[36px] tablet:text-[36px] tabletsm:text-[28px] mobilexl:text-[24px] mobilemd:text-[32px] mobilesm:text-[24px] desktopxl:leading-[3rem] desktopmd:leading-[3rem] desktopsm:leading-[3rem] tablet:leading-[3rem] tabletsm:leading-[2rem] mobilexl:leading-[1.5rem] mobilemd:leading-[2rem] mobilesm:leading-[1.7rem] uppercase desktopxl:mt-[112.5px] desktopmd:mt-[112.5px] desktopsm:mt-[112.5px] tablet:mt-[67px] tabletsm:mt-[67.5px] mobilexl:mt-[67.5px] mobilemd:mt-[280px] mobilesm:mt-[182px] desktopxl:ml-[80px] desktopmd:ml-[80px] desktopsm:ml-[80px] tablet:ml-[40px] tabletsm:ml-[40px] mobilexl:ml-[40px] mobilemd:ml-[20px] mobilesm:ml-[20px] bg-gradient-to-r from-[#2E84C3] via-[#52A27E] to-[#73BE3B] bg-clip-text text-transparent z-10'>
            Оставьте заявку на ремонт, или проверьте статус вашего заказа
        </div>
        <div className='deskopxl:w-[476px] desktopmd:w-[420px] desktopsm:w-[476px] tablet:w-[476px] tabletsm:w-[476px] mobilexl:w-[476px] mobilemd:w-[400px] mobilesm:w-[285px] desktopxl:h-[72px] desktopmd:h-[72px] desktopsm:h-[72px] tablet:h-[72px] tabletsm:h-[72px] mobilexl:h-[72px] mobilemd:h-[96px] mobilesm:h-[76px] font-sf_text font-normal tracking-[.0001em] leading-[1.1rem] desktopxl:text-[18px] desktopmd:text-[16px] desktopsm:text-[16px] tablet:text-[16px] tabletsm:text-[14px] mobilexl:text-[14px] mobilemd:text-[16px] mobilesm:text-[13px] -tracking-[.075em] mt-[24px] desktopxl:ml-[80px] desktopmd:ml-[80px] desktopsm:ml-[80px] tablet:ml-[40px] tabletsm:ml-[40px] mobilexl:ml-[40px] mobilemd:ml-[20px] mobilesm:ml-[20px] z-10'>
        Теперь Вы можете по номеру квитанции проверить состояние Вашего заказа, ознакомится с условиями и ценами ремонта и выразить согласие на выполнение работ
        </div>
        <div className='flex flex-row desktopxl:flex-row desktopmd:flex-row desktopsm:flex-row tablet:flex-row tabletsm:flex-row mobilexl:flex-row mobilemd:flex-col mobilesm:flex-col desktopxl:w-[601px] desktopmd:w-[601px] desktopsm:w-[601px] tablet:w-[601px] tabletsm:w-[601px] mobilexl:w-[601px] mobilemd:w-[290px] mobilesm:w-[290px] desktopxl:h-[53px] desktopmd:h-[53px] desktopsm:h-[53px] tablet:h-[53px] tabletsm:h-[53px] mobilexl:h-[53px] mobilemd:h-[122px] desktopxl:mt-[44px] desktopmd:mt-[44px] desktopsm:mt-[56px] tablet:mt-[56.5px] tabletsm:mt-[83px] mobilexl:mt-[55px] mobilemd:mt-[57px] mobilesm:mt-[28px] desktopxl:ml-[80px] desktopmd:ml-[80px] desktopsm:ml-[80px] tablet:ml-[40px] tabletsm:ml-[40px] mobilexl:ml-[40px] mobilemd:ml-[20px] mobilesm:ml-[20px] desktopxl:gap-x-[23.7px] desktopmd:gap-x-[23.7px] desktopsm:gap-x-[23.7px] tablet:gap-x-[23.7px] tabletsm:gap-x-[24px] mobilexl:gap-x-[24px] mobilemd:gap-y-4 mobilesm:gap-y-4 z-40'>
            <SignUpButton />
            <CheckStatusButton />
        </div>
        <img src='/images/phone.png' alt='headerPhone' className='absolute desktopxl:w-[980px] desktopmd:w-[957px] desktopsm:w-[750px] tablet:w-[750px] tabletsm:w-[645px] mobilexl:w-[575px] mobilemd:w-[480px] mobilesm:w-[360px] desktopxl:-top-[110px] desktopmd:-top-[80px] desktopsm:top-0 tablet:top-[0px] tabletsm:top-0 mobilexl:top-0 mobilemd:top-[0px] mobilesm:top-[0px] desktopxl:left-[925px] desktopmd:left-[820px] desktopsm:left-[685px] tablet:left-[600px] tabletsm:left-[510px] mobilexl:left-[390px] mobilemd:left-[100px] mobilesm:left-[37px]'/>
        <div className='bg-gradient-to-t from-[#F5F5F5] from-10% to-transparent to-90% from-10% to-transparent to-90% from-10% to-transparent to-90% mobilexl:w-[378px] mobilexl:h-[300px] mobilemd:w-[418px] mobilemd:h-[300px] mobilesm:w-[325px] mobilesm:h-[200px] absolute mobilexl:left-[390px] mobilexl:top-[200px] mobilemd:top-[130px] mobilemd:left-[63px] mobilesm:left-[37px] mobilesm:top-[120px] desktopxl:hidden desktopmd:hidden desktopsm:hidden tablet:hidden tabletsm:hidden mobilexl:block mobilemd:block mobilesm:block' />
    </div>
  )
}

export default Header;