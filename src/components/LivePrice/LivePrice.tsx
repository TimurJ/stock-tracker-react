import { useEffect, useState } from 'react'
import LivePriceLoadingError from './LivePriceLoadingError'
import LivePriceLoading from './LivePriceLoading'
import upArrow from '../../assets/up-arrow.svg'
import downArrow from '../../assets/down-arrow.svg'
import './LivePrice.css'

interface LivePriceProps {
  stockSymbol?: string
}

const LivePrice: React.FC<LivePriceProps> = ({ stockSymbol }) => {
  const [livePrice, setLivePrice] = useState<number>()
  const [change, setChange] = useState<number>()
  const [changePercent, setChangePercent] = useState<number>()
  const [error, setError] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setLivePrice(Math.random() * 100)
      setChange(Math.random() * 10)
      setChangePercent(Math.random() * 5)
      setError(false)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [stockSymbol])

  if (error) {
    return <LivePriceLoadingError />
  }

  if (!livePrice || !change) {
    return <LivePriceLoading />
  }

  return (
    <div className="live-container">
      <div className="live-price">${livePrice?.toFixed(2)}</div>
      <div className="price-change">
        <img className="arrow" src={change > 0 ? upArrow : downArrow} alt="down arrow" />
        <div className={change > 0 ? 'price-change-positive' : 'price-change-negative'}>
          {change?.toFixed(2)} | {changePercent?.toFixed(2)}%
        </div>
      </div>
    </div>
  )
}

export default LivePrice
