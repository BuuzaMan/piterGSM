"use client"
import Telegram from '@/svg/telegram'
import VK from '@/svg/vk';
import Whatsapp from '@/svg/whatsapp'
import React from 'react'

const Messengers = () => {
    const handleWhatsapp = () => {
        window.open('https://wa.me/message/AQC4UZPSQSCAO1', '_blank')
    };
    const handleTelegram = () => {
        window.open('https://t.me/pitergsmchat', '_blank')
    };
    const handleVK = () => {
        window.open('https://vk.com/pitergsm', '_blank')
    }
    
  return (
    <div className='flex flex-row desktopxl:gap-x-4 desktopmd:gap-x-4 desktopsm:gap-x-4 tablet:gap-x-4 tabletsm:gap-x-4 mobilexl:gap-x-4 mobilemd:gap-x-4 mobilesm:gap-x-3 desktopxl:mt-[20px] desktopmd:mt-[20px] desktopsm:mt-[20px] tablet:mt-[20px] tabletsm:mt-[20px] mobilexl:mt-[20px] mobilemd:mt-[20px] mobilesm:mt-[24px] desktopxl:mb-[170px] desktopmd:mb-[119px] desktopsm:mb-[119px] tablet:mb-[119px] tabletsm:mb-[119px] mobilexl:mb-[119px] mobilemd:mb-[119px] mobilesm:mb-[56px]'>
        <button onClick={handleWhatsapp}><Whatsapp /></button>
        <button onClick={handleTelegram}><Telegram /></button>
        <button onClick={handleVK}><VK /></button>
    </div>
  )
};

export default Messengers;