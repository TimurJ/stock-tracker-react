import type { StockBasics } from '../../context/CollateralDataContext'
import StockOption from '../StockOption/StockOption'

interface MarketOptionsProps {
  market: string
  filteredStocks: StockBasics[]
}

const MarketOptions: React.FC<MarketOptionsProps> = ({ market, filteredStocks }) => {
  return (
    <div>
      <div className="market-name">{market}</div>
      {filteredStocks.map((stock) => (
        <StockOption key={stock.symbol} symbol={stock.symbol} stockName={stock.description} />
      ))}
    </div>
  )
}

export default MarketOptions
