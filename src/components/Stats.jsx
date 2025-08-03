import React from 'react'
import GetStarted from './GetStarted';

const Stats = () => {
    const stats = [
        { id: "stats-1", value: '3800+', title: 'User Active' },
        { id: "stats-2", value: '230+', title: 'Trusted By Company' },
        { id: "stats-3", value: '$230M+', title: 'Transaction' }
    ];
  return (
    <div className='lg:container lg:max-w-[1320px] lg:w-[1320px] flex-1 flex justify-center items-center flex-wrap sm:mt-0 mt-10 mx-auto'>
        <div className='w-full flex flex-col md:flex-row justify-between items-center sm:w-[80%] gap-5'>
            {stats.map((stat) => (
                <>
                <div key={stat.id} className='flex-1 flex justify-start items-center flex-col m-3'>
                     <h3 className="text-4xl font-bold text-white font-poppins flex items-center">{stat.value}
                <span className="text-[16px] font-medium uppercase text-gradient pl-2 md:pl-5">{stat.title}</span>
            </h3>
                </div>
                <div className={`${stat.id !== stats[stats.length - 1].id ? 'hidden sm:flex' : 'hidden'}`}>
                   <span className="w-2 h-6 text-gray-400">|</span>
                </div>
                </>
            ))}
           
            
        </div>
    </div>
  )
}

export default Stats