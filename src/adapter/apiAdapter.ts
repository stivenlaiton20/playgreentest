import { ApiSerie, Serie } from '../interfaces'

export const ApiAdapter = (user: ApiSerie): Serie => {
  return {
    id: user.id,
    name: user.name,
    image: user.image,
  }
}
