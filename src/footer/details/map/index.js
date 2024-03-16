import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Maps = () => {
    const defaultState = {
        center: [59.932404268394876, 30.365915805518835],
        zoom: 15,
      };
    
      return (
        <YMaps>
          <Map defaultState={defaultState} className='desktopxl:w-[960px] desktopxl:h-[502px] desktopmd:w-[800px] desktopmd:h-[502px] desktopsm:w-[680px] desktopsm:h-[502px] tablet:w-[600px] tablet:h-[502px] tabletsm:w-[512px] tabletsm:h-[502px] mobilexl:w-[768px] mobilexl:h-[502px] mobilemd:w-[480px] mobilemd:h-[480px] mobilesm:w-[360px] mobilesm:h-[323px]'>
            <Placemark geometry={[59.932404268394876, 30.365915805518835]} />
          </Map>
        </YMaps>
      );
    }

export default Maps;