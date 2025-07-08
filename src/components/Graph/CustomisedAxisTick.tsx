import { Text } from 'recharts'

interface PayloadType {
  value: number
}

export interface TickType {
  x?: number
  y?: number
  payload?: PayloadType
  index?: number
}

const CustomisedAxisTick = ({ x, y, payload, index }: TickType) => {
  if (!payload || !y || !x || index === undefined) {
    return null
  }

  let tickValue: number | string = payload.value.toFixed(2)

  switch (index) {
    case 1:
    case 2:
    case 3:
      tickValue = '-'
      break
    case 5:
    case 6:
    case 7:
      tickValue = '-'
      break
    case 9:
    case 10:
      tickValue = '-'
      break
  }
  return (
    <Text
      y={y + 3.5}
      x={x}
      textAnchor="end"
      fill="#7f7f7f"
      fontSize={12}
      fontFamily="Roboto"
      dx={-2}
    >
      {tickValue}
    </Text>
  )
}

export default CustomisedAxisTick
