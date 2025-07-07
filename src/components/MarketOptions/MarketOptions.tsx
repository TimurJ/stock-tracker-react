import { useContext } from 'react'
import { QueryContext } from '../../context/QueryContext'
import StockOption from '../StockOption/StockOption'

interface MarketOptionsProps {
  market: string
}

const MarketOptions: React.FC<MarketOptionsProps> = ({ market }) => {
  const { stocks, cursor } = useContext(QueryContext)

  return (
    <div>
      <div className="market-name">{market}</div>
      {stocks?.map((stock, i) => (
        <StockOption
          key={i}
          position={i}
          symbol={stock.symbol}
          active={i === cursor}
          stockName={stock.name}
        />
      ))}
    </div>
  )
}

export default MarketOptions
