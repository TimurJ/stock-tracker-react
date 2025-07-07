import { useContext } from 'react'
import { QueryContext } from '../../context/QueryContext'
import './StockOption.css'
import { Link } from 'react-router-dom'
import HighlightedWord from '../HighlightedWord/HighlightedWord'

interface StockOptionProps {
  symbol: string
  stockName: string
  active: boolean
  position: number
}

const StockOption: React.FC<StockOptionProps> = ({ symbol, stockName, active, position }) => {
  const { stockSearch, setStockSearch, setCursor } = useContext(QueryContext)

  const handleClick = () => {
    setStockSearch('')
  }

  return (
    <div>
      <Link to={`/${symbol}`} onMouseDown={(event) => event.preventDefault()}>
        <div
          onMouseEnter={() => setCursor(position)}
          className={`stock-suggested ${active && 'hovered'}`}
          onClick={handleClick}
        >
          <HighlightedWord word={symbol} searchToCompare={stockSearch} /> {`-\u00A0`}
          {stockName.split(' ').map((word, i) => (
            <HighlightedWord key={i} word={word} searchToCompare={stockSearch} />
          ))}
        </div>
      </Link>
    </div>
  )
}

export default StockOption
