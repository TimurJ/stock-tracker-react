import { createContext } from 'react'
export interface SetSymbolState {
  setSelectedResult: (symbol: string) => void
}

export const SetSymbolContext = createContext<SetSymbolState>({
  setSelectedResult: () => {},
})
