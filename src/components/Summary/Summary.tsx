import { useState, useEffect } from 'react'
import './Summary.css'
import SummaryError from './SummaryError'
import SummaryLoading from './SummaryLoading'

const Summary: React.FC = () => {
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
    return <SummaryError />
  }

  if (isLoading) {
    return <SummaryLoading />
  }

  const summary = {
    companyName: 'Test Company Name',
    symbol: 'Test Company Symbol',
    website: 'Test Company Website',
    description: 'Test Company Description',
  }

  return (
    <div className="summary-container">
      <div className="summary-line"></div>
      <h2 className="summary-title">Company Summary</h2>
      <h3 className="company-name">
        {summary.companyName} ({summary.symbol})
      </h3>
      <a
        className="company-link"
        target="_blank"
        rel="noreferrer"
        href={
          summary.website.startsWith('w') ? `https://${summary?.website}` : `${summary?.website}`
        }
      >
        {summary.website}
      </a>
      <p className="company-summary">{summary.description.substring(0, 500)}...</p>
      <div className="summary-line"></div>
    </div>
  )
}

export default Summary
