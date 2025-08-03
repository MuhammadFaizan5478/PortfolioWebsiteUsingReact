import React from 'react'
import { features } from '../constants';
import styles, { layout } from '../style';


export const Business = () => {
  return (
    <section id="features" className={`${layout.section} container lg:max-w-[1320px] mx-auto px-5 md:px-0 mt-10`}>
        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} leading-tight md:leading-normal lg:text-[56px] !font-semibold`}>
                You do the business, <br className="sm:block hidden" /> we’ll handle the money.
            </h2>
            <p className={`${styles.paragraph} mt-5 text-gray-300 font-poppins`}>
                With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market, it can be hard to know which one is right for you.
            </p>
            <button type="button" className="mt-10 bg-blue-gradient text-black font-poppins font-medium py-4 px-10 rounded-lg hover:bg-blue-700 transition duration-300">
                Get Started
            </button>
        </div>
        <div className={` ${layout.sectionImg} flex-col !items-start`}>
            {features.map((feature) => (
                <div key={feature.id} className="flex flex-row items-start mb-4 feature-card rounded-3xl px-2 md:px-6 py-6">
                    <div className="flex items-center justify-center w-32 h-32 bg-[#2c383f] max-w-[60px] max-h-[60px] rounded-full mr-5">
                    <img src={feature.icon} alt={feature.title} className="w-7 h-7 object-contain" />
                    </div>
                    <div>
                        <h4 className="text-white font-poppins font-semibold text-xl mb-2 ">{feature.title}</h4>
                        <p className="text-gray-300 font-poppins text-base">{feature.content}</p>
                    </div>
                </div>
            ))}
        </div>
     </section>
  )
}
 