import { useState, useEffect } from 'react'
import './Summary.css'
import SummaryError from './SummaryError'
import SummaryLoading from './SummaryLoading'
import { useCollateralData } from '../../hooks/useCollateralData'

const Summary: React.FC = () => {
  const [error] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { stockSummary } = useCollateralData()

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  if (error || !stockSummary) {
    return <SummaryError />
  }

  if (isLoading) {
    return <SummaryLoading />
  }

  return (
    <div className="summary-container">
      <div className="summary-line"></div>
      <h2 className="summary-title">Company Summary</h2>
      <h3 className="company-name">
        {stockSummary.companyName} ({stockSummary.symbol})
      </h3>
      <a
        className="company-link"
        target="_blank"
        rel="noreferrer"
        href={
          stockSummary.website.startsWith('w')
            ? `https://${stockSummary.website}`
            : `${stockSummary.website}`
        }
      >
        {stockSummary.website}
      </a>
      <p className="company-summary">{stockSummary.description.substring(0, 500)}...</p>
      <div className="summary-line"></div>
    </div>
  )
}

export default Summary
