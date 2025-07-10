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

export interface StockKeyStats {
  high: number
  low: number
  open: number
  previousClose: number
  week52High: number
  week52Low: number
  marketCap: number
  peRatio: number
  dividendYield: number
  ttmEPS: number
  volume: number
  avgTotalVolume: number
}

interface CollateralDataState {
  stockBasics: StockBasics[]
  stockNews: StockNews[]
  stockSummary: StockSummary | undefined
  stockKeyStats: StockKeyStats | undefined
}

export const CollateralDataContext = createContext<CollateralDataState | undefined>(undefined)
