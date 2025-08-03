import React from 'react'
import {card} from '../assets';
import styles, {layout} from '../style';

const Billing = () => {
  return (
    <section id="product" className={`${layout.section} container lg:max-w-[1320px] mx-auto px-5 md:px-0 lg:!pt-0` }>
        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} leading-tight md:leading-normal lg:text-[56px] !font-semibold`}>
                Easily control your <br className="sm:block hidden" /> billing & invoicing.
            </h2>
            <p className={`${styles.paragraph} mt-5 text-gray-300 font-poppins`}>
               Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
            </p>
            <button type="button" className="mt-10 bg-blue-gradient text-black font-poppins font-medium py-4 px-10 rounded-lg hover:bg-blue-700 transition duration-300">
                Get Started
            </button>
        </div>
        <div className={` ${layout.sectionImg} flex-col !items-start`}>
            <img src={card} alt="billing" className="w-full h-full relative z-[5] rounded-3xl" />
        </div>

     </section>
     
  )
}

export default Billing