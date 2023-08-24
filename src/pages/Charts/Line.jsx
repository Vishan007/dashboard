import React from 'react'
import {Header,LineChart } from '../../components'

const Line = () => {
  return (
    <div className='mt-12 m-4 p-4 bg-white rounded-3xl'>
      <Header title='Inflation Rate' category='Chart'  search={false} />
      <div className='w-full' >
        <LineChart/>
      </div>
    </div>
  )
}

export default Line