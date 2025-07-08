import SuggestionPanel from '../SuggestionPanel/SuggestionPanel'
import { useSearchData } from '../../hooks/useSearchData'
import { useState } from 'react'

const SearchBar: React.FC = () => {
  const { searchValue, setSearchValue } = useSearchData()
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <div className={`search-wrapper`}>
      <div className="input-class">
        <input
          id="stock-input"
          type="text"
          onChange={setSearchValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={searchValue}
          placeholder="Enter a stock name or symbol"
        />
        {searchValue && isFocused && <SuggestionPanel />}
      </div>
    </div>
  )
}

export default SearchBar
