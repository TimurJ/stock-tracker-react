import { createContext } from 'react'

interface SearchDataState {
  searchValue: string
  searchResult: string
  setSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void
  setSearchResult: (value: string) => void
}

export const SearchDataContext = createContext<SearchDataState | undefined>(undefined)
