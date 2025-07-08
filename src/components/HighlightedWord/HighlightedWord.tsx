import { highlightMatch } from '../../utils/highlightMatch'

interface HighlightedWordProps {
  word: string
  searchToCompare: string
}

const HighlightedWord: React.FC<HighlightedWordProps> = ({ word, searchToCompare }) => {
  const highlightedLetters = highlightMatch(word, searchToCompare)

  return (
    <span>
      {highlightedLetters}
      {'\u00A0'}
    </span>
  )
}

export default HighlightedWord
