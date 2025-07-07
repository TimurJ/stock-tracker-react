import { createContext } from 'react'
import type { StockData } from '../services/queryService'

interface QueryState {
  stocks: StockData[] | undefined
  stockSearch: string
  cursor: number
  setCursor: (cursor: number) => void
  setStockSearch: (inputUser: string) => void
}

export const QueryContext = createContext<QueryState>({
  stocks: [],
  stockSearch: '',
  cursor: 0,
  setCursor: () => {},
  setStockSearch: () => {},
})
