import type { CollateralData } from '../context/CollateralDataContext'

export const filterCollaterals = (collaterals: CollateralData[], search: string) => {
  if (!search) {
    return []
  }
  const filteredCollaterals = collaterals
    .filter(
      (collateral) =>
        collateral.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        collateral.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    .splice(0, 10)

  return filteredCollaterals
}
