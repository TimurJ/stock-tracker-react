import { createContext } from 'react'

export interface StockBasics {
  description: string
  symbol: string
}

export interface StockNews {
  headline: string
  datetime: number
  source: string
  url: string
}

export interface StockSummary {
  companyName: string
  symbol: string
  website: string
  description: string
}

interface CollateralDataState {
  stockBasics: StockBasics[]
  stockNews: StockNews[]
  stockSummary: StockSummary | undefined
}

export const CollateralDataContext = createContext<CollateralDataState | undefined>(undefined)
