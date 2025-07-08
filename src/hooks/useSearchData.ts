import { useContext } from 'react'
import { SearchDataContext } from '../context/SearchDataContext'

export const useSearchData = () => {
  const context = useContext(SearchDataContext)

  if (!context) {
    throw new Error('useSearchData must be used within a SearchDataProvider')
  }

  return context
}
