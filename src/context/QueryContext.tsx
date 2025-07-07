import { createContext } from 'react'
import type { QueryMarket } from '../services/queryService'

interface QueryState {
  stocks: QueryMarket[] | undefined
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
