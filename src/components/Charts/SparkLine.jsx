import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const SparkLine = ({currentColor,id,type,data}) => {
  return (
    <div style={{height:'100px',width:'250px'}}>
      <ResponsiveLine data={data}
      margin={{ right: 0, bottom: 10,top:10}}
      xScale={{ type: 'point' }}
      yScale={{
          type: type,
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
      yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        colors={currentColor}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        enableCrosshair={false}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        // legends={[
        //   {
        //     anchor: 'bottom-right',
        //     direction: 'column',
        //     justify: false,
        //     translateX: 100,
        //     translateY: 0,
        //     itemsSpacing: 0,
        //     itemDirection: 'left-to-right',
        //     itemWidth: 80,
        //     itemHeight: 20,
        //     itemOpacity: 0.75,
        //     symbolSize: 12,
        //     symbolShape: 'circle',
        //     symbolBorderColor: 'rgba(0, 0, 0, .5)',
        //     effects: [
        //       {
        //         on: 'hover',
        //         style: {
        //           itemBackground: 'rgba(0, 0, 0, .03)',
        //           itemOpacity: 1
        //         }
        //       }
        //     ]
        //   }
        // ]}
        />
    </div>
  )
}

export default SparkLine;