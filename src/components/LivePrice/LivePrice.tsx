import './LivePrice.css'
import { useState } from 'react'
import LivePriceLoadingError from './LivePriceLoadingError'
import LivePriceLoading from './LivePriceLoading'
import upArrow from '../../assets/up-arrow.svg'
import downArrow from '../../assets/down-arrow.svg'
import { useMockLiveData } from '../../hooks/useMockLiveData'

interface LivePriceProps {
  stockSymbol?: string
}

const LivePrice: React.FC<LivePriceProps> = () => {
  const [livePrice, change, changePercent] = useMockLiveData(90, 100)
  const [error] = useState(false)

  if (error) {
    return <LivePriceLoadingError />
  }

  if (!livePrice || !change) {
    return <LivePriceLoading />
  }

  return (
    <div className="live-container">
      <div className="live-price">${livePrice.toFixed(2)}</div>
      <div className="price-change">
        <img className="arrow" src={change > 0 ? upArrow : downArrow} alt="down arrow" />
        <div className={change > 0 ? 'price-change-positive' : 'price-change-negative'}>
          {change.toFixed(2)} | {changePercent.toFixed(2)}%
        </div>
      </div>
    </div>
  )
}

export default LivePrice
