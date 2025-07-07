import { filterQueries } from '../utils/filterQueries'

export interface QueryMarket {
  symbol: string
  name: string
}

export const queryFetch = async (stockSearch?: string) => {
  const URL = `QueryData.json`

  try {
    const response = await fetch(URL)

    const stocks: QueryMarket[] = await response.json()
    const filteredStocks: QueryMarket[] = filterQueries(stocks, stockSearch)
    return filteredStocks
  } catch (error) {
    console.log('Error fetching stock:', error)
  }
}
