import React from 'react'
import {ResponsiveBar} from '@nivo/bar'
import { stackedChartData } from '../../data/dummy'

const Stacked = ({currentColor}) => {
  return (
    <div className='h-full w-[23rem] lg:w-[50rem]'>
      <ResponsiveBar data={stackedChartData}
      keys={[
        'hot dog',
        'burger',
      ]}
      indexBy="country"  
      margin={{ top: 10, right: 10, bottom: 50, left: 10 }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Monthly Sales',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      labelTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                '2.2'
            ]
        ]
    }}
      colors={[ `${currentColor}` ,'#d1d5db']}
      borderColor={{
        from: 'color',
        modifiers: [
            ['darker', 2.2],
            ['opacity', .5]
        ]
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
      }}
      />
    </div>
  )
}

export default Stacked