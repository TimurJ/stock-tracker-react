import React, { useState } from 'react'

export const useKeyPress = function (targetKey: string) {
  const [keyPressed, setKeyPressed] = useState(false)

  function downHandler(event: KeyboardEvent) {
    if (event.key === targetKey) {
      setKeyPressed(true)
    }
  }

  const upHandler = (event: KeyboardEvent) => {
    if (event.key === targetKey) {
      setKeyPressed(false)
    }
  }
  React.useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  })

  return keyPressed
}
