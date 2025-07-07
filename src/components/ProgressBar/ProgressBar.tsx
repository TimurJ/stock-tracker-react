interface ProgressBarProps {
  completed: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed }) => {
  const containerStyles = {
    height: '4px',
    width: '231px',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: ' var(--core-primary-2)',
    borderRadius: 'inherit',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  )
}

export default ProgressBar
