import { useState, useMemo } from 'react'
import { SearchDataContext } from './SearchDataContext'
import { onlyLetters } from '../utils/inputUtils'

export const SearchDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [searchResult, setSearchResult] = useState<string>('')

  const handleSetSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value

    if (onlyLetters(inputValue)) {
      setSearchValue(inputValue)
    }
  }

  const contextValue = useMemo(
    () => ({ searchValue, searchResult, setSearchValue: handleSetSearchValue, setSearchResult }),
    [searchValue, searchResult]
  )

  return <SearchDataContext.Provider value={contextValue}>{children}</SearchDataContext.Provider>
}
