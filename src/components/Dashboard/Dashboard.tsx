import Graph from '../Graph/Graph'
import KeyStats from '../KeyStats/KeyStats'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import { News } from '../News/News'
import SearchBar from '../SearchBar/SearchBar'
import Summary from '../Summary/Summary'
import TopBar from '../TopBar/TopBar'
import './Dashboard.css'

const Dashboard: React.FC = () => {
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
        <Peers stockSymbol={stock} />
      </div>
      <div className="footer">
        <Indexes />
      </div>
    </div>
  )
}

export default Dashboard
