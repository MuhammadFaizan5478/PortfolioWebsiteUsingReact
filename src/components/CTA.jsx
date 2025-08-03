import React from 'react'
import styles from '../style';


const CTA = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative overflow-hidden container lg:max-w-[1320px] mx-auto px-10 md:px-0 lg:!pt-0 `}>
     <div className="w-full flex sm:flex-row flex-col justify-center bg-black-gradient rounded-[20px] sm:p-10 p-8 sm:mb-16 mb-6 relative z-[1] min-h-[300px]">
        <div className="flex-1 flex flex-col justify-center items-start">
          <h1 className={`${styles.heading2} leading-tight lg:text-[56px] !font-bold`}>let's try our service now!</h1>
          <p className={`${styles.paragraph} text-left max-w-[450px] text-gray-400 mt-4 pt-4 text-xl`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
        </div>
        <div className="flex flex-col justify-center sm:min-h-[70px] items-start lg:mr-[10%] mt-6 sm:mt-0">
            <button type="button" className="bg-blue-gradient text-black font-poppins font-medium py-4 px-10 rounded-lg transition duration-300 ">
                Get Started
            </button>
        </div>
     </div>
    </section>
  )
}

export default CTA