import './SummaryLoading.css'

const SummaryLoading = () => {
  return (
    <div className="summary-loading">
      <span>
        <svg fill="#828282" width="50" height="70" data-qa="adaptive-loader__svg">
          <rect
            type="secondary"
            height="50"
            width="10"
            x="0"
            order="0"
            speed="0.8"
            className="summary-one"
          ></rect>
          <rect
            type="secondary"
            height="50"
            width="10"
            x="12"
            order="1"
            speed="0.8"
            className="summary-two"
          ></rect>
          <rect
            type="secondary"
            height="50"
            width="10"
            x="24"
            order="2"
            speed="0.8"
            className="summary-three"
          ></rect>
          <rect
            type="secondary"
            height="50"
            width="10"
            x="36"
            order="3"
            speed="0.8"
            className="summary-four"
          ></rect>
        </svg>
      </span>
    </div>
  )
}

export default SummaryLoading
