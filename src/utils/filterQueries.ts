interface Queries {
  symbol: string
  name: string
}

export const filterQueries = (queries: Queries[], search?: string) => {
  search = search?.match(/[.^$|*+?()[{\\]/gi) ? '+' : search
  const regex = new RegExp(`${search}`, 'gi')

  const filteredQueries = queries.filter((query) => query.symbol.match(regex) || query.name.match(regex)).splice(0, 9)
  return filteredQueries
}
