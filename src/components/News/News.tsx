import './News.css'
import { useEffect, useState } from 'react'
import NewsError from './NewsError'
import NewsLoading from './NewsLoading'
import { useCollateralData } from '../../hooks/useCollateralData'

const News: React.FC = () => {
  const [error] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { stockNews } = useCollateralData()

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  if (error) {
    return <NewsError />
  }

  if (isLoading) {
    return <NewsLoading />
  }

  return (
    <div className="news-wrapper">
      <h3 className="news-title">Latest News</h3>
      {stockNews.slice(0, 3).map((newsArticle, index) => {
        return (
          <div className="news-outer" key={index}>
            <div className="news-container">
              <div className="news-headline">
                <a href={newsArticle.url} target="_blank" rel="noreferrer">
                  {newsArticle.headline.substring(0, 100)}
                </a>
              </div>
              <div className="news-date" data-testid="days-ago">
                {new Date(newsArticle.datetime).getDay()} days ago - {newsArticle.source}
              </div>
            </div>
            {index < 2 ? <div className="lines" key={index}></div> : null}
          </div>
        )
      })}
    </div>
  )
}

export default News
