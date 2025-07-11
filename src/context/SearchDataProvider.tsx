import { useState, useMemo } from 'react'
import { SearchDataContext } from './SearchDataContext'

export const SearchDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [searchResult, setSearchResult] = useState<string>('')

  const contextValue = useMemo(
    () => ({ searchValue, searchResult, setSearchValue, setSearchResult }),
    [searchValue, searchResult]
  )

  return <SearchDataContext.Provider value={contextValue}>{children}</SearchDataContext.Provider>
}
