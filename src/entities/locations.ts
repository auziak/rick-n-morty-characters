export type Location = {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

export type Locations = {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Location[]
  url: string | null
  created: string
}
