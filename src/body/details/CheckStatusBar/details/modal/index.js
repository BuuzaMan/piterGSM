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
  console.log(orderStatus)
  return (

    <div className="flex fixed bg-black bg-opacity-30 items-center w-full h-full inset-0 justify-center z-40">
      <div className='desktopxl:w-[900px] desktopxl:h-[500px] desktopmd:w-[900px] desktopmd:h-[500px] desktopsm:w-[900px] desktopsm:h-[500px] tablet:w-[900px] tablet:h-[500px] tabletsm:w-[900px] tabletsm:h-[500px] mobilexl:w-[600px] mobilexl:h-[500px] mobilemd:w-[400px] mobilemd:h-[500px] mobilesm:w-[300px] mobilesm:h-[550px] bg-white rounded-[16px]'>
        <div className='ml-[40px] mr-[40px] mt-[20px] font-golos'>
          <MainLogo />
          {orderStatus ? <>
          <div className='font-golos font-bold desktopxl:text-[32px] desktopmd:text-[32px] desktopsm:text-[32px] tablet:text-[32px] tabletsm:text-[32px] mobilexl:text-[20px] mobilemd:text-[20px] mobilesm:text-[20px] desktopxl:mt-[10px] desktopmd:mt-[10px] desktopsm:mt-[10px] tablet:mt-[10px] tabletsm:mt-[10px] mobilexl:mt-[10px] mobilemd:mt-[10px] mobilesm:mt-[20px] text-center'>СТАТУС РЕМОНТА</div>
          <div className='desktopxl:mt-[10px] desktopmd:mt-[10px] desktopsm:mt-[10px] tablet:mt-[10px] tabletsm:mt-[10px] mobilexl:mt-[10px] mobilemd:mt-[10px] mobilesm:mt-[40px] desktopxl:text-[16px] desktopsm:text-[16px] desktopmd:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px]'>
            <span className='font-semibold'>Устройство:</span>
            <span className='font-medium'>&nbsp;{orderStatus.device}</span>
          </div>
          <div className='desktopxl:w-[800px] desktopmd:w-[800px] desktopsm:w-[800px] tablet:w-[800px] tabletsm:w-[800px] mobilexl:w-[500px] mobilemd:w-[310px] mobilesm:w-[230px] h-[1px] bg-gray-300'></div>
          <div className='mt-[10px] desktopxl:text-[16px] desktopsm:text-[16px] desktopmd:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px]'>
            <span className='font-semibold'>Серийный номер:</span> 
            <span className='font-medium'>&nbsp;{orderStatus.sn}</span>
          </div>
          <div className='desktopxl:w-[800px] desktopmd:w-[800px] desktopsm:w-[800px] tablet:w-[800px] tabletsm:w-[800px] mobilexl:w-[500px] mobilemd:w-[310px] mobilesm:w-[230px] h-[1px] bg-gray-300'></div>
          <div className='mt-[10px] desktopxl:text-[16px] desktopsm:text-[16px] desktopmd:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px]'>
            <span className='font-semibold'>Проблема:</span>
            <span className='font-medium'>&nbsp;{orderStatus.problem}</span>
          </div>
          <div className='desktopxl:w-[800px] desktopmd:w-[800px] desktopsm:w-[800px] tablet:w-[800px] tabletsm:w-[800px] mobilexl:w-[500px] mobilemd:w-[310px] mobilesm:w-[230px] h-[1px] bg-gray-300'></div>
          <div className='mt-[10px] desktopxl:text-[16px] desktopsm:text-[16px] desktopmd:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px]'>
            <span className='font-semibold'>Тип ремонта:</span> 
            <span className='font-medium'>&nbsp;{orderStatus.type.name}</span>
          </div>
          <div className='desktopxl:w-[800px] desktopmd:w-[800px] desktopsm:w-[800px] tablet:w-[800px] tabletsm:w-[800px] mobilexl:w-[500px] mobilemd:w-[310px] mobilesm:w-[230px] h-[1px] bg-gray-300'></div>
          <div className='mt-[10px] desktopxl:text-[16px] desktopsm:text-[16px] desktopmd:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px]'>
            <span className='font-semibold'>Статус:</span>
            <span className='font-medium'>&nbsp;{orderStatus.status}</span>
          </div>
          <div className='desktopxl:w-[800px] desktopmd:w-[800px] desktopsm:w-[800px] tablet:w-[800px] tabletsm:w-[800px] mobilexl:w-[500px] mobilemd:w-[310px] mobilesm:w-[230px] h-[1px] bg-gray-300'></div>
          <div className='mt-[10px] desktopxl:text-[16px] desktopsm:text-[16px] desktopmd:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px]'>
            <span className='font-semibold'>Клиент:</span> 
            <span className='font-medium'>&nbsp;{orderStatus.agent}</span>
          </div>
          <div className='desktopxl:w-[800px] desktopmd:w-[800px] desktopsm:w-[800px] tablet:w-[800px] tabletsm:w-[800px] mobilexl:w-[500px] mobilemd:w-[310px] mobilesm:w-[230px] h-[1px] bg-gray-300'></div>
          <div className='mt-[10px] desktopxl:text-[16px] desktopsm:text-[16px] desktopmd:text-[16px] tablet:text-[16px] tabletsm:text-[16px] mobilexl:text-[16px] mobilemd:text-[16px] mobilesm:text-[14px]'>
            <span className='font-semibold'>Срок:</span>
            <span className='font-medium'>&nbsp;{formatDate(orderStatus.deadline)}</span>
          </div>
          <button onClick={onClose} className='desktopxl:w-[800px] desktopmd:w-[800px] desktopsm:w-[800px] tablet:w-[800px] tabletsm:w-[800px] mobilexl:w-[510px] mobilemd:w-[320px] mobilesm:w-[230px] h-[50px] rounded-[8px] bg-gray-200 font-golos desktopxl:text-[24px] desktopmd:text-[24px] desktopsm:text-[24px] tablet:text-[24px] tabletsm:text-[24px] mobilexl:text-[20px] mobilemd:text-[20px] mobilesm:text-[20px] mt-[40px]'>ЗАКРЫТЬ</button>
          </> : <div className='ml-[350px] mt-[100px]'><img src='/images/load.gif' alt='loading' /></div>} 
        </div>     
      </div>
    </div>
  )
};

export default Modal;
