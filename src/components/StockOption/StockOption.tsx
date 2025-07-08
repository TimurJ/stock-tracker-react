import './StockOption.css'
import HighlightedWord from '../HighlightedWord/HighlightedWord'
import { Link } from 'react-router-dom'
import { useSearchData } from '../../hooks/useSearchData'

interface StockOptionProps {
  symbol: string
  stockName: string
}

const StockOption: React.FC<StockOptionProps> = ({ symbol, stockName }) => {
  const { searchValue, setSearchResult } = useSearchData()

  const handleMouseDown = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setSearchResult(symbol)
  }

  return (
    <div>
      <Link to={`/${symbol}`} onMouseDown={handleMouseDown}>
        <div className={'stock-suggested'}>
          <HighlightedWord word={symbol} searchToCompare={searchValue} />
          {`-\u00A0`}
          <HighlightedWord word={stockName} searchToCompare={searchValue} />
        </div>
      </Link>
    </div>
  )
}

export default StockOption
