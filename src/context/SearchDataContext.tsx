import { createContext } from 'react'

interface SearchDataState {
  searchValue: string
  setSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchDataContext = createContext<SearchDataState | undefined>(undefined)
