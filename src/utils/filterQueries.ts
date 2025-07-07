import type { StockData } from '../services/queryService'

export const filterQueries = (queries: StockData[], search?: string) => {
  search = search?.match(/[.^$|*+?()[{\\]/gi) ? '+' : search
  const regex = new RegExp(`${search}`, 'gi')

  const filteredQueries = queries
    .filter((query) => query.symbol.match(regex) || query.description.match(regex))
    .splice(0, 9)
  return filteredQueries
}
