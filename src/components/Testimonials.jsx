import React from 'react'
import { feedback } from '../constants';
import styles from '../style';
import { quotes } from '../assets';
import '../index.css';
import Clients from './Clients';


const Testimonials = () => {
  return (
    <>
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} w-full flex-col relative`}>
    <div className="absolute z-[3] w-[70%] h-[70%] rounded-full blue__gradient -bottom-[-20vh] -right-[50%]" />
    <div className="container lg:max-w-[1320px] mx-auto px-5 md:px-0 lg:!pt-0">
     <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={`${styles.heading2} leading-tight lg:text-[46px] !font-semibold`}>What people are <br ClassName=" hidden sm:flex"/> saying about us</h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px] text-gray-400`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
     </div>
     <div className="w-full flex flex-wrap justify-center sm:justify-between items-center feedback-container relative z-[2]">
        
            {feedback.map((card) => (
                <div className="flex flex-col sm:w-[370px] w-full feedback-card rounded-[20px] md:px-10 md:py-16 py-10 my-5 mx-2 bg-black-gradient">
              <div key={card.id} className="flex flex-col justify-start items-start">
            <img src={quotes} alt='quotes' className='mb-8'/>
            <p className="text-white text-[18px] leading-[32px] my-4 min-h-[120px]">{card.content}</p>
            <div className="flex flex-row">
                <img src={card.img} alt={card.name} className="w-[48px] h-[48px] rounded-full"/>
                <div className="flex flex-col ml-4">
                    <h4 className="text-white font-semibold text-[20px] leading-[32px]">{card.name}</h4>
                    <p className="text-gray-400 text-[16px] leading-[24px]">{card.title}</p>
                </div>
                </div>
        </div>
        </div>
            ))}
        
        </div>
        </div>
    </section>
    </>
  )
}

export default Testimonials