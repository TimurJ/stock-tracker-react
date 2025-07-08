import type { CollateralData } from '../../context/CollateralDataContext'
import StockOption from '../StockOption/StockOption'

interface MarketOptionsProps {
  market: string
  filteredStocks: CollateralData[]
}

const MarketOptions: React.FC<MarketOptionsProps> = ({ market, filteredStocks }) => {
  return (
    <div>
      <div className="market-name">{market}</div>
      {filteredStocks.map((stock, index) => (
        <StockOption
          key={stock.displaySymbol}
          position={index}
          symbol={stock.symbol}
          active={false}
          stockName={stock.description}
        />
      ))}
    </div>
  )
}

export default MarketOptions
