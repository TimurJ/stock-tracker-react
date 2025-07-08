import './Homepage.css'
import SplashScreen from '../SplashScreen/SplashScreen'
import SearchScreen from '../SearchScreen/SearchScreen'
import { useEffect, useState } from 'react'
import { useSearchData } from '../../hooks/useSearchData'

const Homepage: React.FC = () => {
  const [completed, setCompleted] = useState(0)
  const { setSearchValue, setSearchResult } = useSearchData()

  useEffect(() => {
    setSearchValue('')
    setSearchResult('')
  }, [setSearchValue, setSearchResult])

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
