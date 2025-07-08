import './NewsLoading.css'

const NewsLoading = () => {
  return (
    <div className="news-loading">
      <span>
        <svg fill="#828282" width="50" height="70" data-qa="adaptive-loader__svg">
          <rect
            type="secondary"
            height="50"
            width="10"
            x="0"
            order="0"
            speed="0.8"
            className="news-one"
          ></rect>
          <rect
            type="secondary"
            height="50"
            width="10"
            x="12"
            order="1"
            speed="0.8"
            className="news-two"
          ></rect>
          <rect
            type="secondary"
            height="50"
            width="10"
            x="24"
            order="2"
            speed="0.8"
            className="news-three"
          ></rect>
          <rect
            type="secondary"
            height="50"
            width="10"
            x="36"
            order="3"
            speed="0.8"
            className="news-four"
          ></rect>
        </svg>
      </span>
    </div>
  )
}

export default NewsLoading
