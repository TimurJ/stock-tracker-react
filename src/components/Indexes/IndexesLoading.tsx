import './IndexesLoading.css'

const IndexLoading = () => {
  return (
    <div className="index-loading">
      <span>
        <svg fill="#828282" width="32" height="45" data-qa="adaptive-loader__svg">
          <rect
            type="secondary"
            height="30"
            width="6"
            x="0"
            order="0"
            speed="0.8"
            className="index-one"
          ></rect>
          <rect
            type="secondary"
            height="30"
            width="6"
            x="8"
            order="1"
            speed="0.8"
            className="index-two"
          ></rect>
          <rect
            type="secondary"
            height="30"
            width="6"
            x="16"
            order="2"
            speed="0.8"
            className="index-three"
          ></rect>
          <rect
            type="secondary"
            height="30"
            width="6"
            x="24"
            order="3"
            speed="0.8"
            className="index-four"
          ></rect>
        </svg>
      </span>
    </div>
  )
}

export default IndexLoading
