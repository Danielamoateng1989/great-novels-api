import axios from 'axios'

export const genresApi = async () => {
  const { data } = await axios.get('http://localhost:1337/genres')

  return data
}

export const genreApi = async (id) => {
  const { data } = await axios.get(`http://localhost:1337/genres/${id}`)

  return data
}

export default () => {

}




