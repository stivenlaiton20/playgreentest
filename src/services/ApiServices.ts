import { ApiAdapter } from '../adapter'
import { axios } from '../api'

export const getApi = async (id: number) => {
  const res = await axios.get(`/api/character/${id}`)
  const data = await res.data
  const userData = ApiAdapter(data)
  return userData
}
