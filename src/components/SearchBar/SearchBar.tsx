import SuggestionPanel from '../SuggestionPanel/SuggestionPanel'
import { useSearchData } from '../../hooks/useSearchData'
import { useState } from 'react'
import LivePrice from '../LivePrice/LivePrice'
import { onlyLetters } from '../../utils/inputUtils'

interface SearchBarProps {
  additionalStyles?: string
}
const SearchBar: React.FC<SearchBarProps> = ({ additionalStyles }) => {
  const { searchValue, searchResult, setSearchValue } = useSearchData()
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value

    if (onlyLetters(inputValue)) {
      setSearchValue(inputValue)
    }
  }

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
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={searchValue}
          placeholder={searchResult || 'Enter a stock name or symbol'}
        />
        {searchValue && isFocused && <SuggestionPanel />}
      </div>
      {!isFocused && searchResult && <LivePrice stockSymbol={searchValue} />}
    </div>
  )
}

export default SearchBar
