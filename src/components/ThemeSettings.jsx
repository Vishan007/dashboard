import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { Tooltip } from '@mui/material'
import { themeColors } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const ThemeSettings = () => {
  const {setColor,setMode,currentMode,
    currentColor,setThemeSettings} = useStateContext()
    
  return (
    <div className='bg-half-transparent w-screen 
    fixed nav-item top-0 right-0'>
      <div className='float-right h-screen
      dark:text-gray-200 bg-white dark:[#484B52] w-400'>
        <div className='flex justify-between items-center p-4 ml-4 border-b-2'>
          <p className='font-semibold text-lg' >
            Settings
          </p>
          <button className='text-2xl p-3 
          hover:drop-shadow-xl hover:bg-light-gray '
            type='button'
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className='flex-col items-center p-4 ml-4' >
          <p className='font-semibold text-lg'>Theme Option</p>
          <div className='mt-4'>
            <input type="radio"
              id='light'
              name='theme'
              value='light'
              className='cursor-pointer w-6 h-6'
              onChange={setMode}
              checked={currentMode === 'light'}
            />
            <label htmlFor="light" className='ml-4 text-2xl cursor-pointer'>
              Light
            </label>
          </div>
          <div className='mt-4'>
            <input type="radio"
              id='dark'
              name='theme'
              value='dark'
              className='cursor-pointer w-6 h-6'
              onChange={setMode}
              checked={currentMode === 'dark'}
            />
            <label htmlFor="dark" className='ml-4 text-2xl cursor-pointer'>
              Dark
            </label>
          </div>
        </div>
        <div className='flex-col items-center p-4 ml-4 border-t-2' >
          <p className='font-semibold text-lg'>Theme Colors</p>
          <div className='flex gap-3' >
            {themeColors.map((item, index) => (
                <Tooltip key={index} title={item.name}
                  placement='top'>
                  <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                    <button type='button'
                      style={{backgroundColor:item.color}}
                      onClick={()=> setColor(item.color)}
                      className='h-10 w-10 rounded-full cursor-pointer'>
                      <BsCheck className={`ml-2 text-2xl text-gray-200 ${item.color === currentColor ? 'block' : 'hidden'}`} />
                    </button>
                  </div>
                </Tooltip>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ThemeSettings