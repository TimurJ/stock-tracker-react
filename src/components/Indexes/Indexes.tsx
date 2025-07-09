import './Indexes.css'
import { useState, useEffect } from 'react'
import IndexesError from './IndexesError'
import IndexLoading from './IndexesLoading'
import upArrow from '../../assets/up-arrow.svg'
import downArrow from '../../assets/down-arrow.svg'
import { useMockLiveData } from '../../hooks/useMockLiveData'

const Indexes: React.FC = () => {
  const [error] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [indexPrice, indexChange, indexPercentChange] = useMockLiveData(900, 1000)

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  if (error) {
    return <IndexesError />
  }

  if (isLoading) {
    return <IndexLoading />
  }

  const spy = {
    indexPrice: indexPrice,
    indexChange: indexChange,
    indexPercentChange: indexPercentChange,
  }
  const dia = {
    indexPrice: indexPrice,
    indexChange: indexChange,
    indexPercentChange: indexPercentChange,
  }
  const iwm = {
    indexPrice: indexPrice,
    indexChange: indexChange,
    indexPercentChange: indexPercentChange,
  }

  return (
    <div className="index">
      <div className="index-combo">
        <div className="name">
          <span className="index-name">SPY</span> ${spy.indexPrice.toFixed(2)}
        </div>

        <div className={spy.indexChange > 0 ? 'positiveChange' : 'negativeChange'}>
          <img
            className="index-arrow"
            src={spy.indexChange > 0 ? upArrow : downArrow}
            alt="arrow"
          />
          <span className="index-change">
            {spy.indexChange.toFixed(2)} | {spy.indexPercentChange.toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="index-line"></div>

      <div className="index-combo">
        <div className="name">
          <span className="index-name">DIA</span> ${dia.indexPrice.toFixed(2)}
        </div>

        <div className={dia.indexChange > 0 ? 'positiveChange' : 'negativeChange'}>
          <img
            className="index-arrow"
            src={dia.indexChange > 0 ? upArrow : downArrow}
            alt="arrow"
          />
          <span className="index-change">
            {dia.indexChange.toFixed(2)} | {dia.indexPercentChange.toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="index-line"></div>

      <div className="index-combo">
        <div className="name">
          <span className="index-name">IWM</span> ${iwm.indexPrice.toFixed(2)}
        </div>

        <div className={iwm.indexChange > 0 ? 'positiveChange' : 'negativeChange'}>
          <img
            className="index-arrow"
            src={iwm.indexChange > 0 ? upArrow : downArrow}
            alt="arrow"
          />
          <span className="index-change">
            {iwm.indexChange.toFixed(2)} | {iwm.indexPercentChange.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default Indexes
