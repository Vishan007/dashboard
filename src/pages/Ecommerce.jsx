import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import {GoDotFill} from 'react-icons/go'
import { Stacked,Pie,SparkLine,Button} from '../components';

import { earningData,SparklineAreaData,ecomPieChartData} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  const {currentColor} = useStateContext()
  return (
    <div className='mt-14 lg:mt-4'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 shadow-md
        dark:bg-secondary-dark-bg h-44 
        rounded-xl w-full lg:w-[19rem] p-8 pt-9 m-3
        bg-no-repeat bg-cover bg-center border border-gray-300'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-gray-400 font-bold'>Earnings</p>
              <p className='text-2xl'>$798451</p>
            </div>
          </div>
          <div className='mt-6'>
          <Button color='white'
            bgcolor={currentColor}
            text='Download'
            borderRadius='10px'
            size='md' />
          </div>
        </div>
        <div className='flex flex-wrap m-3 justify-center gap-1 items-center sm:gap-3'>
          {earningData.map((item) => (
            <div key={item.title}
            className='bg-white h-44 dark:text-gray-200 
            dark:bg-secondary-dark-bg md:w-52 border border-gray-300
            p-10 pt-9 rounded-2xl shadow-md '>
              <button type='button' style={{color:item.iconColor,
              backgroundColor:item.iconBg}} className='text-2xl opacity-0.9
              rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3' >
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm ${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1' >{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 w-780
        dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 lg:w-1200 border border-gray-300 shadow-md'>
          <div className='flex justify-between'> 
              <p className='font-semibold text-xl'>
                Revenue Updates
              </p>
              <div className='flex items-center gap-4' >
                <p className='flex items-center gap-2 text-gray-400 hover:drop-shadow-xl'>
                  <span> <GoDotFill/></span>
                  <span>Expense</span>
                </p>
                <p className='flex items-center gap-2 hover:drop-shadow-xl'
                style={{color:currentColor}} >
                  <span> <GoDotFill/></span>
                  <span>Budget</span>
                </p>
              </div>
          </div>
          <div className='flex gap-5 flex-wrap'>
              <div className='border-r-1 border-color m-4 pr-8'>
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>$98235</span>
                    <span className='p-1.5 
                    hover:drop-shadow-xl
                    cursor-pointer
                    rounded-full text-white bg-green-400 ml-3 
                    text-xs'>23%</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Budget</p>
                </div>
                <div className='mt-8' >
                  <p>
                    <span className='text-3xl font-semibold'>$48235</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Expense</p>
                </div>
                <div className='mt-5' >
                  <SparkLine currentColor={`${currentColor}`} id='line-sparkline' 
                  type='linear' data={SparklineAreaData} />
                </div>
                <div className='mt-10'>
                  <Button color='white' bgcolor={`${currentColor}`} text='Download' borderRadius='10px' />
                </div>
              </div>
              <div className='mt-5' >
                <Stacked currentColor={currentColor} />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce