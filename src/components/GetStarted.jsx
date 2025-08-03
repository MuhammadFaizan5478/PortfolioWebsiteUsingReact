import React from 'react'
import styles from '../style';
import {arrowUp} from '../assets';

const GetStarted = () => {
  return (
    <div className='w-[140px] h-[140px] flex justify-center items-center text-white rounded-full bg-blue-gradient p-[2px] cursor-pointer'>
        <div className={`${styles.flexCenter} flex-col bg-[#18181b] w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-col`}>
                <p className='font-poppins font-medium text-[18px] leading-[23px] flex flex-row'>
                    <span className='text-gradient'>Get</span>
                    <img src={arrowUp} alt="arrow" className="w-[24px] h-[24px] ml-2" />
                </p>
                <p className='font-poppins font-medium text-[18px] leading-[23px] text-gradient'> 
                    Started</p>
            </div>                              
        </div>
    </div>
  )
}

export default GetStarted