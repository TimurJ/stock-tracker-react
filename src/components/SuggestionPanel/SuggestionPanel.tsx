import { useContext } from 'react'
import { QueryContext } from '../../context/QueryContext'
import './SuggestionPanel.css'
import MarketOptions from '../MarketOptions/MarketOptions'

const SuggestionPanel: React.FC = () => {
  const { stocks } = useContext(QueryContext)
  return (
    <div className="suggestion-panel">
      {stocks?.length === 0 ? (
        <div className="no-result-label">No results found</div>
      ) : (
        <MarketOptions market="Stocks" />
      )}
    </div>
  )
}

export default SuggestionPanel
