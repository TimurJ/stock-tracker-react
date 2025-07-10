import './Graph.css'
import CustomisedAxisTick from './CustomisedAxisTick'
import GraphFailedToLoad from './GraphError'
import GraphLoading from './GraphLoading'
import { useEffect, useState } from 'react'
import { useDrag } from '../../hooks/useDrag'
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
import { graphData } from './GraphData'

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

  const formattedGraphData = graphData.map((data) => {
    const date = new Date(data.t)
    const time = `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`
    return { time, close: data.c }
  })

  return (
    <div className="chart" ref={reference} onMouseDown={startDrag}>
      <div className="chart-inner">
        <ResponsiveContainer width="99%" height="99%">
          <LineChart data={formattedGraphData}>
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
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Graph
