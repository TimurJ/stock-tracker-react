import './Dashboard.css'
import Graph from '../Graph/Graph'
import Indexes from '../Indexes/Indexes'
import KeyStats from '../KeyStats/KeyStats'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import News from '../News/News'
import SearchBar from '../SearchBar/SearchBar'
import Summary from '../Summary/Summary'
import TopBar from '../TopBar/TopBar'
import TopPeers from '../TopPeers/TopPeers'
import { useParams } from 'react-router-dom'
import { useSearchData } from '../../hooks/useSearchData'
import { useEffect } from 'react'

const Dashboard: React.FC = () => {
  const { stock } = useParams<{ stock: string }>()
  const { setSearchResult } = useSearchData()

  useEffect(() => setSearchResult(stock || ''), [setSearchResult, stock])

  return (
    <div className="dashboard">
      <div className="left-sidebar">
        <LeftSidebar />
      </div>
      <TopBar />
      <div className="main-section">
        <SearchBar additionalStyles={'margin'} />
        <Graph />
        <KeyStats />
      </div>
      <div className="right-sidebar">
        <News />
        <Summary />
        <TopPeers />
      </div>
      <div className="footer">
        <Indexes />
      </div>
    </div>
  )
}

export default Dashboard
