import SuggestionPanel from '../SuggestionPanel/SuggestionPanel'
import { useSearchData } from '../../hooks/useSearchData'
import { useState } from 'react'
import LivePrice from '../LivePrice/LivePrice'

interface SearchBarProps {
  additionalStyles?: string
}
const SearchBar: React.FC<SearchBarProps> = ({ additionalStyles }) => {
  const { searchValue, searchResult, setSearchValue } = useSearchData()
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <div className={`search-wrapper ${additionalStyles}`}>
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
      {!isFocused && searchResult && <LivePrice stockSymbol={searchValue} />}
    </div>
  )
}

export default SearchBar
