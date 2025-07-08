import './GraphLoading.css'

const GraphLoading: React.FC = () => {
  return (
    <div className="graph-loading">
      <span>
        <svg fill="#828282" width="78" height="115" data-qa="adaptive-loader__svg">
          <rect
            type="secondary"
            height="80"
            width="15"
            x="0"
            order="0"
            speed="0.8"
            className="graph-one"
          ></rect>
          <rect
            type="secondary"
            height="80"
            width="15"
            x="20"
            order="1"
            speed="0.8"
            className="graph-two"
          ></rect>
          <rect
            type="secondary"
            height="80"
            width="15"
            x="40"
            order="2"
            speed="0.8"
            className="graph-three"
          ></rect>
          <rect
            type="secondary"
            height="80"
            width="15"
            x="60"
            order="3"
            speed="0.8"
            className="graph-four"
          ></rect>
        </svg>
      </span>
    </div>
  )
}

export default GraphLoading
