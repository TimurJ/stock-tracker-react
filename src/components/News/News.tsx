import { useEffect, useState } from 'react'
import './News.css'
import NewsError from './NewsError'
import NewsLoading from './NewsLoading'

export const News: React.FC = () => {
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
    return <NewsError />
  }

  if (isLoading) {
    return <NewsLoading />
  }

  const news = [
    {
      open: 10,
      headline: 'This is a test headline',
      datetime: 100,
      source: 'This is a test news source',
      url: 'This is a test news URL',
    },
  ]

  return (
    <div className="news-wrapper">
      <h3 className="news-title">Latest News</h3>
      {news.map((element, i) => {
        return (
          <div className="news-outer" key={i}>
            <div className="news-container">
              <div className="news-headline">
                <a href={element.url} target="_blank" rel="noreferrer">
                  {element.headline.substring(0, 100)}
                </a>
              </div>
              <div className="news-date" data-testid="days-ago">
                {element.datetime} ago - {element.source}
              </div>
            </div>
            {i < 2 ? <div className="lines" key={i}></div> : null}
          </div>
        )
      })}
    </div>
  )
}
