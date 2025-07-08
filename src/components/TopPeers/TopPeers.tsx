import { useState, useEffect } from 'react'
import TopPeersError from './TopPeersError'
import TopPeersLoading from './TopPeersLoading'
import { Link } from 'react-router-dom'
import './TopPeers.css'

const TopPeers: React.FC = () => {
  const [error] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  if (error) {
    return <TopPeersError />
  }

  if (isLoading) {
    return <TopPeersLoading />
  }

  const topPeers = ['AAPL', 'TSLA', 'MSFT', 'META']

  return (
    <div className="peers-wrapper">
      <h2 className="peers-title">Top Peers</h2>
      <div className="peers-container">
        {topPeers.map((peer) => {
          return (
            <Link to={`/${peer}`} key={peer}>
              <button className="peer">{peer}</button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TopPeers
