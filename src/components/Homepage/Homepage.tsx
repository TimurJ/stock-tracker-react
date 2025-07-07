import { useEffect, useState } from 'react'
import SplashScreen from '../SplashScreen/SplashScreen'
import SearchScreen from '../SearchScreen/SearchScreen'
import './Homepage.css'

const Homepage: React.FC = () => {
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    if (completed < 100) {
      const intervalId = setInterval(() => {
        setCompleted((prevState) => prevState + 1)
      }, 5)

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [completed])

  return (
    <div className="homepage">
      <SplashScreen completed={completed} />
      {completed === 100 && <SearchScreen />}
    </div>
  )
}

export default Homepage
