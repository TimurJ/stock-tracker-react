import './TopBar.css'
import logo from '../../assets/brand-logo-horizontal.svg'

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <img src={logo} className="top-logo" alt="Reactive Analytics Logo" />
    </div>
  )
}

export default TopBar
