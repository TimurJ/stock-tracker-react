import { useState, useEffect } from 'react'

export const useMockLiveData = (minPrice: number, maxPrice: number) => {
  const [livePrice, setLivePrice] = useState<number>(0)
  const [change, setChange] = useState<number>(0)
  const [changePercent, setChangePercent] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const isNegative = Math.random() < 0.5
      const changeValue = isNegative ? -(Math.random() * 10) : Math.random() * 10
      setLivePrice(Math.random() * (maxPrice - minPrice) + minPrice)
      setChange(changeValue)
      setChangePercent(Math.random() * 5)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [minPrice, maxPrice])

  return [livePrice, change, changePercent]
}
