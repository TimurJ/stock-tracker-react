import { createContext } from 'react'

interface SearchDataState {
  searchValue: string
  searchResult: string
  setSearchValue: (value: string) => void
  setSearchResult: (value: string) => void
}

export const SearchDataContext = createContext<SearchDataState | undefined>(undefined)
