import { highlightMatch } from '../../utils/highlightMatch'

interface HighlightedWordProps {
  word: string
  searchToCompare: string
  useSeparator: boolean
}

const HighlightedWord: React.FC<HighlightedWordProps> = ({
  word,
  searchToCompare,
  useSeparator,
}) => {
  const highlightedLetters = highlightMatch(word, searchToCompare)

  return (
    <span>
      {highlightedLetters}
      {useSeparator ? '\u00A0' : ''}
    </span>
  )
}

export default HighlightedWord
