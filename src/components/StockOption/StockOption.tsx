import './StockOption.css'
import HighlightedWord from '../HighlightedWord/HighlightedWord'
import { Link } from 'react-router-dom'
import { useSearchData } from '../../hooks/useSearchData'

interface StockOptionProps {
  symbol: string
  stockName: string
  active: boolean
  position: number
}

const StockOption: React.FC<StockOptionProps> = ({ symbol, stockName, active }) => {
  const { searchValue } = useSearchData()
  const handleClick = () => {}

  return (
    <div>
      <Link to={`/${symbol}`} onMouseDown={(event) => event.preventDefault()}>
        <div
          onMouseEnter={() => {}}
          className={`stock-suggested ${active && 'hovered'}`}
          onClick={handleClick}
        >
          <HighlightedWord word={symbol} searchToCompare={searchValue} useSeparator={true} />
          {`-\u00A0`}
          <HighlightedWord word={stockName} searchToCompare={searchValue} useSeparator={false} />
        </div>
      </Link>
    </div>
  )
}

export default StockOption
