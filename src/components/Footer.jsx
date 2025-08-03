import React from 'react'
import styles from '../style';
import {logo} from '../assets';
import {footerLinks, socialMedia} from '../constants';

const Footer = () => {
  return (
     <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} w-full flex-col relative overflow-hidden container lg:max-w-[1320px] mx-auto px-5 md:px-0 lg:!pt-0`}>
       <div className="w-full flex justify-between items-start md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <div className="md:w-2/5 w-full flex flex-col justify-between items-start">
            <img src={logo} alt="logo" className="max-w-[300px] h-[60px] object-contain"/>
            <p className={`${styles.paragraph} text-left max-w-[450px] text-gray-400 mt-4`}>
                A new way to make the payments easy, reliable and secure.
            </p>
        </div>
        
       {footerLinks.map((footerlink, index) => (
  <div key={index} className="md:w-1/5 w-full flex flex-col md:mt-0 mt-6">
    <h4 className="text-white font-semibold text-[20px] leading-[32px] mb-4">
      {footerlink.title}
    </h4>
    <ul className="list-none flex flex-col">
      {footerlink.links.map((link) => (
        <li
          key={link.name}
          className="text-gray-400 text-[16px] leading-[24px] mb-2 cursor-pointer hover:text-white"
        >
          {link.name}
        </li>
      ))}
    </ul>
  </div>
))}


            
       </div>
         <div className="w-full flex justify-between items-center mt-10 pt-6 border-t border-gray-700 flex-col sm:flex-row">
                <p className="text-gray-400 text-[16px] leading-[24px] text-center md:text-left">Copyright © 2021 HooBank. All Rights Reserved.</p>
                <div className="flex justify-center items-center mt-6 sm:mt-0">
                    <ul className="list-none flex flex-row">
                        {socialMedia.map((social, index) => (
                            <li key={social.id} className={`cursor-pointer text-[24px] ${index === socialMedia.length - 1 ? 'mr-0' : 'mr-6'} text-white`}>
                                <a href={social.link} target="_blank" rel="noopener noreferrer">
                                    <img src={social.icon} alt={social.id} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>  

    </section>
  )
}

export default Footer