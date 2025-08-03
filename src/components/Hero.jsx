import React from 'react'
import {discount, robot} from '../assets';
import GetStarted from './GetStarted';
import Stats from './Stats';

const Hero = () => {
  return (
    <section className="w-full lg:max-w-[1320px] text-white mx-auto" id="home">
        <div className="lg:container w-full mx-auto flex flex-col lg:flex-row items-start justify-center h-auto text-left py-5 md:py-20 min-h-[600px]">
            <div className="lg:w-1/2 w-full h-auto flex flex-col items-start justify-center gap-5 pt-[5%] lg:items-start pl-5 md:pl-0 overflow-hidden"> 
                <h3 className="flex flex-row bg-discount-gradient px-4 py-2 text-[14px] justify-start items-center rounded-l">
                    <span><img src={discount}/></span> 
                    <span className='font-bold text-white pr-1'> 20%</span>
                    Discount For
                    <span className='font-bold text-white pr-1 pl-1'> 1 Month</span>
                    Account
                </h3>
                <div className="w-full flex flex-row items-center justify-between">
                <h1 className="text-left text-[62px] font-bold leading-[80px] font-poppins md:text-[78px]">
                    The Next <br />
                    <span className="text-gradient bg-clip-text text-transparent">
                        Generation
                    </span>
                </h1>
                <span className="hidden md:flex">
                <GetStarted />
                </span>
                </div>
                <h1 className="text-left text-[62px] font-bold leading-[80px] font-poppins md:leading-[50px] -mt-[15px] md:mt-0 md:text-[78px]">
                    Payment Method.
                </h1>
                <p className="text-left text-[18px] font-normal leading-[30px] max-w-[470px] mt-5 mr-5 md:mr-0">
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                </p>
            </div>
            <div className="w-full md:w-1/2 flex-1 flex justify-center items-center relative md:my-0 my-10 min-h-[300px]">
              <img
                src={robot}
                alt="Billing"
                className="w-[80%] h-auto md:w-[600px] md:h-[600px] relative z-[5]"
              />
             <div className="absolute z-0 w-[40%] h-[35%] top-0 left-0 pink__gradient" />
             <div className="absolute z-1 w-[80%] h-[80%] bottom-40 left-0 rounded-full blue__gradient" />
             <div className="absolute z-0 w-[50%] h-[50%] right-10 bottom-10 rounded-full white__gradient" />
            </div>
            <span className=" w-full flex justify-center items-center md:hidden">
                <GetStarted />
            </span>

        </div>
        <Stats />
    </section>
  )
}

export default Hero