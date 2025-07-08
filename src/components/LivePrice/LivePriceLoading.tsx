import './LivePriceLoading.css'

const LivePriceLoading: React.FC = () => {
  return (
    <div className="live-loading">
      <span>
        <svg fill="#828282" width="40" height="32" data-qa="adaptive-loader__svg">
          <rect
            type="secondary"
            height="21"
            width="6"
            x="0"
            order="0"
            speed="0.8"
            className="live-one"
          ></rect>
          <rect
            type="secondary"
            height="21"
            width="6"
            x="8"
            order="1"
            speed="0.8"
            className="live-two"
          ></rect>
          <rect
            type="secondary"
            height="21"
            width="6"
            x="16"
            order="2"
            speed="0.8"
            className="live-three"
          ></rect>
          <rect
            type="secondary"
            height="21"
            width="6"
            x="24"
            order="3"
            speed="0.8"
            className="live-four"
          ></rect>
        </svg>
      </span>
    </div>
  )
}

export default LivePriceLoading
