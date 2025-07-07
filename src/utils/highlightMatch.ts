export const highlightMatch = (word: string, searchToCompare: string) => {
  const regex = new RegExp(searchToCompare, 'gi')
  const textMatch = word.match(regex)
  const strongText = textMatch ? textMatch.toString() : ''
  const normalText = word.substring(strongText.length)
  return [strongText, normalText]
}
