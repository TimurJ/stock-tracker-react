import { useState, useEffect, useMemo } from 'react'
import {
  CollateralDataContext,
  type StockBasics,
  type StockKeyStats,
  type StockNews,
  type StockSummary,
} from './CollateralDataContext'

export const CollateralDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stockBasics, setStockBasics] = useState<StockBasics[]>([])
  const [stockNews, setStockNews] = useState<StockNews[]>([])
  const [stockSummary, setStockSummary] = useState<StockSummary>()
  const [stockKeyStats, setStockKeyStats] = useState<StockKeyStats>()

  useEffect(() => {
    const queryFetch = async () => {
      const STOCK_BASICS_URL = 'StockBasicsData.json'
      const STOCK_NEWS_URL = 'StockNewsData.json'
      const STOCK_SUMMARY_URL = 'StockSummaryData.json'
      const STOCK_KEY_STATS_URL = 'StockKeyStatsData.json'
      try {
        const [
          stockBasicsResponse,
          stockNewsResponse,
          stockSummaryResponse,
          stockKeyStatsResponse,
        ] = await Promise.all([
          fetch(STOCK_BASICS_URL),
          fetch(STOCK_NEWS_URL),
          fetch(STOCK_SUMMARY_URL),
          fetch(STOCK_KEY_STATS_URL),
        ])
        const stockBasicsData: StockBasics[] = await stockBasicsResponse.json()
        const stockNewsData: StockNews[] = await stockNewsResponse.json()
        const stockSummaryData: StockSummary = await stockSummaryResponse.json()
        const stockKeyStatsData: StockKeyStats = await stockKeyStatsResponse.json()
        setStockBasics(stockBasicsData)
        setStockNews(stockNewsData)
        setStockSummary(stockSummaryData)
        setStockKeyStats(stockKeyStatsData)
      } catch (error) {
        console.log('Error fetching stock:', error)
      }
    }

    queryFetch()
  }, [])

  const contextValue = useMemo(
    () => ({ stockBasics, stockNews, stockSummary, stockKeyStats }),
    [stockBasics, stockNews, stockSummary, stockKeyStats]
  )

  return (
    <CollateralDataContext.Provider value={contextValue}>{children}</CollateralDataContext.Provider>
  )
}
