import React from 'react'
import styles from '../style';
import { airbnb, binance, coinbase, dropbox } from '../assets';

const Clients = () => {
    const clients = [
        { id: 'client-1', logo: airbnb },
        { id: 'client-2', logo: binance },
        { id: 'client-3', logo: coinbase },
        { id: 'client-4', logo: dropbox },
    ];
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col sm:flex-row relative container lg:max-w-[1320px] mx-auto px-5 md:px-0 lg:!pt-0 justify-between items-center -z-[1]`}>
        {clients.map((client) => (
            <div key={client.id} className="flex justify-center items-center w-[120px] h-[120px] sm:w-[192px] sm:h-[192px]">
                <img src={client.logo} alt={client.id} className="w-full h-full object-contain" />
            </div>
        ))}
    </section>
  )
}

export default Clients