import './Indexes.css'
import { useState, useEffect } from 'react'
import IndexesError from './IndexesError'
import IndexLoading from './IndexesLoading'
import upArrow from '../../assets/up-arrow.svg'
import downArrow from '../../assets/down-arrow.svg'

const Indexes: React.FC = () => {
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
    return <IndexesError />
  }

  if (isLoading) {
    return <IndexLoading />
  }

  const spy = { indexPrice: 100, indexChange: 10, indexPercentChange: 10 }
  const dia = { indexPrice: 100, indexChange: -10, indexPercentChange: -10 }
  const iwm = { indexPrice: 100, indexChange: 10, indexPercentChange: 10 }

  return (
    <div className="index">
      <div className="index-combo">
        <div className="name">
          <span className="index-name">SPY</span> ${spy.indexPrice}
        </div>

        <div className={spy.indexChange > 0 ? 'positiveChange' : 'negativeChange'}>
          <img
            className="index-arrow"
            src={spy.indexChange > 0 ? upArrow : downArrow}
            alt="arrow"
          />
          <span className="index-change">
            {spy.indexChange} | {spy.indexPercentChange}%
          </span>
        </div>
      </div>

      <div className="index-line"></div>

      <div className="index-combo">
        <div className="name">
          <span className="index-name">DIA</span> ${dia.indexPrice}
        </div>

        <div className={dia.indexChange > 0 ? 'positiveChange' : 'negativeChange'}>
          <img
            className="index-arrow"
            src={dia.indexChange > 0 ? upArrow : downArrow}
            alt="arrow"
          />
          <span className="index-change">
            {dia.indexChange} | {dia.indexPercentChange}%
          </span>
        </div>
      </div>

      <div className="index-line"></div>

      <div className="index-combo">
        <div className="name">
          <span className="index-name">IWM</span> ${iwm.indexPrice}
        </div>

        <div className={iwm.indexChange > 0 ? 'positiveChange' : 'negativeChange'}>
          <img
            className="index-arrow"
            src={iwm.indexChange > 0 ? upArrow : downArrow}
            alt="arrow"
          />
          <span className="index-change">
            {iwm.indexChange} | {iwm.indexPercentChange}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default Indexes
