import './SuggestionPanel.css'
import MarketOptions from '../MarketOptions/MarketOptions'
import { useCollateralData } from '../../hooks/useCollateralData'
import { filterCollaterals } from '../../utils/filterCollaterals'
import { useSearchData } from '../../hooks/useSearchData'
import { useMemo } from 'react'

const SuggestionPanel: React.FC = () => {
  const { stocks } = useCollateralData()
  const { searchValue } = useSearchData()
  const filteredStocks = useMemo(
    () => filterCollaterals(stocks, searchValue),
    [stocks, searchValue]
  )

  return (
    <div className="suggestion-panel">
      {filteredStocks.length === 0 ? (
        <div className="no-result-label">No results found</div>
      ) : (
        <MarketOptions market="Stocks" filteredStocks={filteredStocks} />
      )}
    </div>
  )
}

export default SuggestionPanel
