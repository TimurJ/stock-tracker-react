import { useRef } from 'react'

export const useDrag = (): [
  React.RefObject<HTMLInputElement | null>,
  (e: React.MouseEvent) => void
] => {
  const ref = useRef<HTMLInputElement>(null)

  let pos = { left: 0, x: 0 }
  const startDrag = (e: React.MouseEvent) => {
    console.log(e)
    if (ref.current) {
      pos = { left: ref.current.scrollLeft, x: e.clientX }

      document.addEventListener('mousemove', handleScroll)
      document.addEventListener('mouseup', endScroll)
    }
  }

  const handleScroll = (e: MouseEvent) => {
    const dx = e.clientX - pos.x
    if (ref.current) {
      ref.current.scrollLeft = pos.left - dx
    }
  }

  const endScroll = () => {
    document.removeEventListener('mousemove', handleScroll)
    document.removeEventListener('mouseup', endScroll)
  }

  return [ref, startDrag]
}
