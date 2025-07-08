import { useState, useEffect, useMemo } from 'react'
import { CollateralDataContext, type CollateralData } from './CollateralDataContext'

export const CollateralDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stocks, setStocks] = useState<CollateralData[]>([])

  useEffect(() => {
    const queryFetch = async () => {
      const URL = 'CollateralData.json'
      try {
        const response = await fetch(URL)
        const data: CollateralData[] = await response.json()
        setStocks(data)
      } catch (error) {
        console.log('Error fetching stock:', error)
      }
    }

    queryFetch()
  }, [])

  const contextValue = useMemo(() => ({ stocks }), [stocks])

  return (
    <CollateralDataContext.Provider value={contextValue}>{children}</CollateralDataContext.Provider>
  )
}
