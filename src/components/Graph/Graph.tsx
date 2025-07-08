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

  const testData = [
    { close: 100, label: '1' },
    { close: 110, label: '2' },
    { close: 140, label: '3' },
    { close: 130, label: '4' },
    { close: 110, label: '5' },
    { close: 150, label: '6' },
    { close: 150, label: '7' },
    { close: 170, label: '8' },
    { close: 180, label: '9' },
    { close: 160, label: '10' },
    { close: 200, label: '11' },
    { close: 200, label: '12' },
    { close: 220, label: '13' },
    { close: 250, label: '14' },
  ]

  return (
    <div className="chart" ref={reference} onMouseDown={startDrag}>
      <div className="chart-inner">
        <ResponsiveContainer width="99%">
          <LineChart data={testData}>
            <CartesianGrid stroke="#d1d1d1" strokeWidth={0.4} />

            <YAxis
              stroke="#eaebeb"
              tickSize={10}
              tickCount={12}
              allowDecimals={true}
              domain={['auto', 'auto']}
              padding={{ top: 18 }}
              dx={-5}
              tick={<CustomisedAxisTick />}
            />

            <XAxis
              stroke="#eaebeb"
              tickSize={10}
              tickCount={12}
              tick={{ fill: '#7f7f7f', fontSize: 12, fontFamily: 'Roboto' }}
              interval={2}
              allowDuplicatedCategory={false}
              dataKey="label"
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

            <ReferenceLine y={200} stroke="#aaabd1" strokeDasharray="5 3" />

            <Line
              hide={false}
              name="Close"
              data={testData}
              dataKey="close"
              stroke="#aaabd1"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />

            <Line
              hide={true}
              name="Yesterday Close"
              data={testData}
              dataKey="close"
              stroke="grey"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Graph
