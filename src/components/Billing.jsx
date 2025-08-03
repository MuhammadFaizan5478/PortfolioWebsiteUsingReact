import React from 'react'
import {apple, bill, google} from '../assets';
import styles, {layout} from '../style';

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse} container lg:max-w-[1320px] mx-auto px-5 md:px-0 lg:!pt-0` }>
        <div className="absolute z-[0] w-[80%] h-[80%] rounded-full pink__gradient -bottom-[90vh] -left-[85%]" />
        <div className={` ${layout.sectionImg} flex-col !items-start`}>
            <img src={bill} alt="billing" className="w-full h-full relative z-[5] rounded-3xl" />
        </div>
        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} leading-tight md:leading-normal lg:text-[56px] !font-semibold`}>
                Easily control your <br className="sm:block hidden" /> billing & invoicing.
            </h2>
            <p className={`${styles.paragraph} mt-5 text-gray-300 font-poppins`}>
               Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
            </p>
            <div className="flex flex-row items-center mt-2">
                <img src={apple} alt="apple" className="w-[128px] h-[42px] object-contain mr-5 mt-10 cursor-pointer" />
                <img src={google} alt="google" className="w-[128px] h-[42px] object-contain mt-10 cursor-pointer" />
            </div>

        </div>
     </section>
     
  )
}

export default Billing