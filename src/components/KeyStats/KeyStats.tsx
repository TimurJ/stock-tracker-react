import { useEffect, useState } from 'react'
import './KeyStats.css'
import KeyStatsError from './KeyStatsError'
import KeyStatsLoading from './KeyStatsLoading'
import { formatNumber } from '../../utils/formatNumber'

const KeyStats: React.FC = () => {
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
    return <KeyStatsError />
  }

  if (isLoading) {
    return <KeyStatsLoading />
  }

  const stats = {
    high: 10,
    low: 10,
    open: 10,
    previousClose: 10,
    week52High: 10,
    week52Low: 10,
    marketCap: 10,
    peRatio: 10,
    dividendYield: 10,
    ttmEPS: 10,
    volume: 10,
    avgTotalVolume: 10,
  }

  const {
    high,
    low,
    open,
    previousClose,
    week52High,
    week52Low,
    marketCap,
    peRatio,
    dividendYield,
    ttmEPS,
    volume,
    avgTotalVolume,
  } = stats

  return (
    <div className="stats-wrapper" data-testid="statistics">
      <h2 className="stats-title">Key Statistics</h2>
      <div className="stats-container">
        <div className="stats-section">
          <div className="stats-row">
            Open
            <span>{open ? `$${open?.toFixed(2)}` : '-'}</span>
          </div>
          <div className="stats-row">
            High
            <span>{high ? `$${high?.toFixed(2)}` : '-'}</span>
          </div>
          <div className="stats-row">
            Low
            <span>{low ? `$${low?.toFixed(2)}` : '-'}</span>
          </div>
          <div className="stats-row">
            Previous Close
            <span>{`$${previousClose?.toFixed(2)}`}</span>
          </div>
        </div>
        <div className="stats-section">
          <div className="stats-row">
            Day Range
            <span>{high ? `$${high?.toFixed(2)} - ${low?.toFixed(2)}` : '-'}</span>
          </div>
          <div className="stats-row">
            52 Week Range
            <span>{`$${week52Low?.toFixed(2)} - ${week52High?.toFixed(2)}`}</span>
          </div>
          <div className="stats-row">
            Market Cap
            <span>{formatNumber(marketCap) ?? '-'}</span>
          </div>
          <div className="stats-row">
            P/E Ratio
            <span>{peRatio.toFixed(2) ?? '-'}</span>
          </div>
        </div>
        <div className="stats-section">
          <div className="stats-row">
            Dividend Yield
            <span>{dividendYield ? `${dividendYield?.toFixed(2)}%` : '-'}</span>
          </div>
          <div className="stats-row">
            Earnings Per Share
            <span>{ttmEPS ? `${ttmEPS?.toFixed(2)}` : '-'}</span>
          </div>
          <div className="stats-row">
            Volume
            <span>{volume ? formatNumber(volume) : '-'}</span>
          </div>
          <div className="stats-row">
            Total Avg. Volume
            <span>{avgTotalVolume ? formatNumber(avgTotalVolume) : '-'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyStats
