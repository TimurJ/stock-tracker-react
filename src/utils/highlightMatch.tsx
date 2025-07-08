export const highlightMatch = (word: string, searchToCompare: string) => {
  const regex = new RegExp(searchToCompare, 'gi')
  const parts = []
  let lastIndex = 0

  word.replace(regex, (match, offset) => {
    if (offset > lastIndex) {
      parts.push(<span key={lastIndex}>{word.substring(lastIndex, offset)}</span>)
    }

    parts.push(
      <strong key={offset} className="black">
        {match}
      </strong>
    )

    lastIndex = offset + match.length

    return match
  })

  if (lastIndex < word.length) {
    parts.push(<span key={lastIndex}>{word.substring(lastIndex)}</span>)
  }
  return parts
}
