export function onlyLetters(word: string) {
  return /^[a-zA-Z]*$/.test(word)
}
