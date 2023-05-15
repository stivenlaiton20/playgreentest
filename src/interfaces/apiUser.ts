import { Dispatch } from 'react'

interface SerieAssociatedUrl {
  name: string
  url: string
}

export interface ApiSerie {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: SerieAssociatedUrl
  location: SerieAssociatedUrl
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Serie {
  id: number
  name: string
  image: string
}

export interface SerieData {
  dataApi: Serie
  figure: number
  setFigure: Dispatch<React.SetStateAction<number>>
}
