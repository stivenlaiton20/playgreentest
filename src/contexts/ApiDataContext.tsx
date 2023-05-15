import { createContext, useContext, useEffect, useState } from 'react'
import { PropsProvider, Serie, SerieData, initialState } from '../interfaces'
import { getApi } from '../services'
import { getInLocalStorage } from '../utils'

const ApiDataContext = createContext(initialState as SerieData)

export function useData(): SerieData {
  return useContext(ApiDataContext)
}

export const ApiDataProvider = ({ children }: PropsProvider) => {
  const [dataApi, setDataApi] = useState<Serie | string>('')
  const [figure, setFigure] = useState<number>(1)

  useEffect(() => {
    getApi(figure).then((data) => setDataApi(data))
  }, [figure])

  useEffect(() => {
    const storedFigure = getInLocalStorage('figure') || 1
    setFigure(storedFigure)
  }, [])

  const values = { dataApi, figure, setFigure } as SerieData

  return <ApiDataContext.Provider value={values}>{children}</ApiDataContext.Provider>
}

export default ApiDataContext
