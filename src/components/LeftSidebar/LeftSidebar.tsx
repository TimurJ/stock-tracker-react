import { Link } from 'react-router-dom'
import logo from '../../assets/ra-logo.png'
import './LeftSidebar.css'

const LeftSidebar: React.FC = () => {
  return (
    <div className="left-bar">
      <Link to="/">
        <img src={logo} className="left-logo" alt="Reactive Analytics Logo" />
      </Link>
    </div>
  )
}

export default LeftSidebar
