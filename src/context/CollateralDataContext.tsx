import { createContext } from 'react'

export interface CollateralData {
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

interface CollateralDataState {
  stocks: CollateralData[]
}

export const CollateralDataContext = createContext<CollateralDataState | undefined>(undefined)
