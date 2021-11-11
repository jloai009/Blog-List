import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  try {
    const response = await axios.post(baseUrl, newObject, config)
    return response
  } catch (error) {
    return {
      message: 'Error: Title and URL are required',
      status: 400
    }
  }

}

// eslint-disable-next-line
export default {
  getAll,
  setToken,
  create
}