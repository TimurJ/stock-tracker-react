import './Graph.css'
import { useEffect, useState } from 'react'
import { useDrag } from '../../hooks/useDrag'
import GraphFailedToLoad from './GraphError'
import GraphLoading from './GraphLoading'
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import CustomisedAxisTick from './CustomisedAxisTick'
import { data } from './graphdata'

const Graph: React.FC = () => {
  const [reference, startDrag] = useDrag()
  const [error] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  if (error) {
    return <GraphFailedToLoad />
  }

  if (isLoading) {
    return <GraphLoading />
  }

  // let price = 100
  // let hour = 8

  // const getTime = (increment: number) => {
  //   if (increment % 60 === 0) {
  //     hour += 1
  //   }
  //   return `${hour.toString().padStart(2, '0')}:${(increment % 60).toString().padStart(2, '0')}`
  // }

  // const testData = Array.from({ length: 50 }).map((_, index) => {
  //   if (Math.round(Math.random()) > 0) {
  //     price += 10
  //   } else {
  //     price -= 10
  //   }
  //   return { close: price, label: getTime(index * 5) }
  // })

  const formattedData = data.map((graphData) => {
    const date = new Date(graphData.t)
    const time = `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`
    return { time, close: graphData.c }
  })

  return (
    <div className="chart" ref={reference} onMouseDown={startDrag}>
      <div className="chart-inner">
        <ResponsiveContainer width="99%" height="99%">
          <LineChart data={formattedData}>
            <CartesianGrid stroke="#d1d1d1" strokeWidth={0.4} />

            <YAxis
              stroke="#eaebeb"
              tickSize={10}
              tickCount={12}
              allowDecimals={true}
              type="number"
              domain={['dataMin - 0.5', 'auto']}
              padding={{ top: 18 }}
              dx={-5}
              tick={<CustomisedAxisTick />}
            />

            <XAxis
              stroke="#eaebeb"
              tickSize={10}
              tickCount={12}
              tick={{ fill: '#7f7f7f', fontSize: 12, fontFamily: 'Roboto' }}
              interval={5}
              allowDuplicatedCategory={false}
              dataKey="time"
              dy={5}
              textAnchor="beginning"
            />

            <Tooltip
              contentStyle={{
                fontSize: 14,
                borderColor: '#aaabd1',
                textAlign: 'center',
                fontFamily: 'Roboto',
              }}
            />

            <ReferenceLine y={180.5} stroke="#aaabd1" strokeDasharray="5 3" />

            <Line
              hide={false}
              name="Close"
              dataKey="close"
              stroke="#aaabd1"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />

            {/* <Line
              hide={true}
              name="Yesterday Close"
              dataKey="c"
              stroke="grey"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Graph
