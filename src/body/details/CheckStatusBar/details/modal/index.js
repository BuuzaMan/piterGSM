import MainLogo from '@/svg/mainlogo';
import React from 'react'

function Modal({ open, onClose, orderStatus }) {
  if (!open) return null

  const formatDate = (dateString) => {
    if (!dateString) return "Нет данных";
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('ru-RU');
    return formattedDate;
  };

  if (!orderStatus || Object.keys(orderStatus).length === 0) {
    return (
      <div className="flex fixed bg-black bg-opacity-30 items-center w-full h-full inset-0 justify-center z-40">
        <div className='flex relative desktopxl:w-[600px] desktopxl:h-[300px] desktopmd:w-[600px] desktopmd:h-[300px] desktopsm:w-[600px] desktopsm:h-[300px] tablet:w-[600px] tablet:h-[300px] tabletsm:w-[600px] tabletsm:h-[300px] mobilexl:w-[400px] mobilexl:h-[400px] mobilemd:w-[400px] mobilemd:h-[400px] mobilesm:w-[300px] mobilesm:h-[400px] bg-white justify-center'>
          <div className='absolute w-[220px] desktopxl:left-[30px] desktopxl:top-[30px] desktopmd:left-[30px] desktopmd:top-[30px] desktopsm:left-[30px] desktopsm:top-[30px] tablet:left-[30px] tablet:top-[30px] tabletsm:left-[30px] tabletsm:top-[30px] mobilexl:left-[90px] mobilexl:top-[30px] mobilemd:left-[90px] mobilemd:top-[30px] mobilesm:left-[40px] mobilesm:top-[30px]'><img src='images/error.png' alt='error' /></div>
          <button onClick={onClose} className='absolute font-sf_text text-[48px] bg-gradient-to-r from-[#2F84C0] via-[#53A37C] to-[#74BE3D] bg-clip-text text-transparent desktopxl:left-[560px] desktopxl:bottom-[240px] desktopmd:left-[560px] desktopmd:bottom-[240px] desktopsm:left-[560px] desktopsm:bottom-[240px] tablet:left-[560px] tablet:bottom-[240px] tabletsm:left-[560px] tabletsm:bottom-[240px] mobilexl:left-[350px] mobilexl:bottom-[330px] mobilemd:left-[350px] mobilemd:bottom-[335px] mobilesm:left-[260px] mobilesm:bottom-[340px]'>×</button>
          <div className='flex flex-col desktopxl:ml-[240px] desktopxl:mt-[100px] desktopmd:ml-[240px] desktopmd:mt-[100px] desktopsm:ml-[240px] desktopsm:mt-[100px] tablet:ml-[240px] tablet:mt-[100px] tabletsm:ml-[240px] tabletsm:mt-[100px] mobilexl:ml-[0px] text-center mobilexl:mt-[300px] mobilemd:ml-0 mobilemd:mt-[300px] mobilesm:ml-0 mobilesm:mt-[300px] font-sf_text'>
            <span>Что-то пошло не так...</span>
            <span>Возможно такого номера не существует.</span>
          </div>
        </div>
        
      </div>
    );
  }
  console.log(orderStatus)
  return (

    <div className="flex fixed bg-black bg-opacity-30 items-center w-full h-full inset-0 justify-center z-40">
      <div className='desktopxl:w-[900px] desktopxl:h-[430px] desktopmd:w-[900px] desktopmd:h-[420px] desktopsm:w-[900px] desktopsm:h-[420px] tablet:w-[900px] tablet:h-[410px] tabletsm:w-[900px] tabletsm:h-[410px] mobilexl:w-[600px] mobilexl:h-[410px] mobilemd:w-[400px] mobilemd:h-[430px] mobilesm:w-[300px] mobilesm:h-[440px] bg-white rounded-[16px]'>
        <div className='ml-[40px] mr-[40px] mt-[20px] font-golos'>
          <MainLogo />
          {orderStatus ? <>
          <div className='font-sf font-bold desktopxl:text-[32px] desktopmd:text-[32px] desktopsm:text-[32px] tablet:text-[32px] tabletsm:text-[32px] mobilexl:text-[20px] mobilemd:text-[20px] mobilesm:text-[20px] desktopxl:mt-[10px] desktopmd:mt-[10px] desktopsm:mt-[10px] tablet:mt-[10px] tabletsm:mt-[10px] mobilexl:mt-[10px] mobilemd:mt-[10px] mobilesm:mt-[20px] text-center'>СТАТУС РЕМОНТА</div>
          <div className=' font-sf_text desktopxl:mt-[10px] desktopmd:mt-[10px] desktopsm:mt-[10px] tablet:mt-[10px] tabletsm:mt-[10px] mobilexl:mt-[10px] mobilemd:mt-[10px] mobilesm:mt-[40px] desktopxl:text-[16px] desktopsm:text-[16px] desktopmd:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px]'>
            <span className='font-semibold'>Устройство:</span>
            <span className='font-medium'>&nbsp;{orderStatus.device}</span>
          </div>
          <div className='desktopxl:w-[800px] desktopmd:w-[800px] desktopsm:w-[800px] tablet:w-[800px] tabletsm:w-[800px] mobilexl:w-[500px] mobilemd:w-[310px] mobilesm:w-[230px] h-[1px] bg-gray-300'></div>
          <div className='mt-[10px] font-sf_text desktopxl:text-[16px] desktopsm:text-[16px] desktopmd:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px]'>
            <span className='font-semibold'>Проблема:</span>
            <span className='font-medium'>&nbsp;{orderStatus.problem}</span>
          </div>
          <div className='desktopxl:w-[800px] desktopmd:w-[800px] desktopsm:w-[800px] tablet:w-[800px] tabletsm:w-[800px] mobilexl:w-[500px] mobilemd:w-[310px] mobilesm:w-[230px] h-[1px] bg-gray-300'></div>
          <div className='mt-[10px] font-sf_text desktopxl:text-[16px] desktopsm:text-[16px] desktopmd:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px]'>
            <span className='font-semibold'>Тип ремонта:</span> 
            <span className='font-medium'>&nbsp;{orderStatus.type.name}</span>
          </div>
          <div className='desktopxl:w-[800px] desktopmd:w-[800px] desktopsm:w-[800px] tablet:w-[800px] tabletsm:w-[800px] mobilexl:w-[500px] mobilemd:w-[310px] mobilesm:w-[230px] h-[1px] bg-gray-300'></div>
          <div className='mt-[10px] font-sf_text desktopxl:text-[16px] desktopsm:text-[16px] desktopmd:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px]'>
            <span className='font-semibold'>Статус:</span>
            <span className='font-medium'>&nbsp;{orderStatus.status}</span>
          </div>
          <div className='desktopxl:w-[800px] desktopmd:w-[800px] desktopsm:w-[800px] tablet:w-[800px] tabletsm:w-[800px] mobilexl:w-[500px] mobilemd:w-[310px] mobilesm:w-[230px] h-[1px] bg-gray-300'></div>
          <div className='mt-[10px] font-sf_text desktopxl:text-[16px] desktopsm:text-[16px] desktopmd:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px]'>
            <span className='font-semibold'>Срок до:</span>
            <span className='font-medium'>&nbsp;{formatDate(orderStatus.deadline)}</span>
          </div>
          <button onClick={onClose} className='desktopxl:w-[800px] desktopmd:w-[800px] desktopsm:w-[800px] tablet:w-[800px] tabletsm:w-[800px] mobilexl:w-[510px] mobilemd:w-[320px] mobilesm:w-[230px] h-[50px] rounded-[8px] bg-gray-200 font-sf desktopxl:text-[24px] desktopmd:text-[24px] desktopsm:text-[24px] tablet:text-[24px] tabletsm:text-[24px] mobilexl:text-[20px] mobilemd:text-[20px] mobilesm:text-[20px] mt-[40px]'>ЗАКРЫТЬ</button>
          </> : <div className='ml-[350px] mt-[100px]'><img src='/images/load.gif' alt='loading' /></div>} 
        </div>     
      </div>
    </div>
  )
};

export default Modal;
