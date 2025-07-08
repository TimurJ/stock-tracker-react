import './StockOption.css'
import HighlightedWord from '../HighlightedWord/HighlightedWord'
import { useNavigate } from 'react-router-dom'
import { useSearchData } from '../../hooks/useSearchData'

interface StockOptionProps {
  symbol: string
  stockName: string
}

const StockOption: React.FC<StockOptionProps> = ({ symbol, stockName }) => {
  const { searchValue, setSearchValue, setSearchResult } = useSearchData()
  const navigate = useNavigate()

  const handleMouseDown = () => {
    setSearchValue('')
    setSearchResult(symbol)
    navigate(`/${symbol}`)
  }

  return (
    <div>
      <a onMouseDown={handleMouseDown}>
        <div className={'stock-suggested'}>
          <HighlightedWord word={symbol} searchToCompare={searchValue} />
          {`-\u00A0`}
          <HighlightedWord word={stockName} searchToCompare={searchValue} />
        </div>
      </a>
    </div>
  )
}

export default StockOption
