import SuggestionPanel from '../SuggestionPanel/SuggestionPanel'
import { useSearchData } from '../../hooks/useSearchData'

const SearchBar: React.FC = () => {
  const { searchValue, setSearchValue } = useSearchData()

  return (
    <div className={`search-wrapper`}>
      <div className="input-class">
        <input
          id="stock-input"
          type="text"
          onChange={setSearchValue}
          value={searchValue}
          placeholder="Enter a stock name or symbol"
        />
        <SuggestionPanel />
      </div>
    </div>
  )
}

export default SearchBar
