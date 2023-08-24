import React from 'react'
import {BsSearch} from 'react-icons/bs'

const Header = ({category,title,onSearch,search}) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400' >
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight
      text-slate-900' >{title}</p>
      <div className='flex justify-end'> {
        search && (
          <div className='flex bg-gray-100 rounded-xl p-2 border-0'>
          <input type="text" className='bg-gray-100 border-0 outline-0' 
          placeholder=' Search by Name' onChange={(e)=>onSearch(e.target.value)}
          />
          <BsSearch className='text-xl text-gray-400' />
        </div>
        )
      }
      </div>
    </div>
  )
}

export default Header