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
  //   const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'
  //   const liveDataUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/intraday-prices/${token}&chartInterval=5`
  //   const yesterdayDataUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/chart/date/20211119${token}&chartInterval=5`
  //   const yesterdayCloseUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/previous/${token}`

  const [reference, startDrag] = useDrag()

  //   const [yesterdayClose] = useFetchGraphClose(yesterdayCloseUrl)
  //   const [yesterdayData, yesterdayDataError] = useFetchGraphData(yesterdayDataUrl)
  //   const [liveData, liveDataError] = useFetchGraphData(liveDataUrl)
  const [liveData] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const testData = [100, 200, 250, 220, 210]

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  if (!liveData) {
    return <GraphFailedToLoad />
  }

  if (isLoading) {
    return <GraphLoading />
  }

  return (
    <div className="chart" ref={reference} onMouseDown={startDrag}>
      <div className="chart-inner">
        <ResponsiveContainer width="99%">
          <LineChart data={testData}>
            <CartesianGrid
              stroke="#d1d1d1"
              strokeWidth={0.4}
              verticalFill={['#ffffff00', '#ededed80']}
            />

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
              interval={5}
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
