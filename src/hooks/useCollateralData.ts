import { useContext } from 'react'
import { CollateralDataContext } from '../context/CollateralDataContext'

export const useCollateralData = () => {
  const context = useContext(CollateralDataContext)

  if (!context) {
    throw new Error('useCollateralData must be used within a CollateralDataProvider')
  }

  return context
}
