import { filterQueries } from '../utils/filterQueries'

export interface StockData {
  currency: string
  description: string
  displaySymbol: string
  figi: string
  isin: null
  mic: string
  shareClassFIGI: string
  symbol: string
  symbol2: string
  type: string
}

export const queryFetch = async (stockSearch: string) => {
  const URL = `stockData.json`

  try {
    const response = await fetch(URL)

    const stocks: StockData[] = await response.json()
    const filteredStocks: StockData[] = filterQueries(stocks, stockSearch)
    return filteredStocks
  } catch (error) {
    console.log('Error fetching stock:', error)
  }
}
