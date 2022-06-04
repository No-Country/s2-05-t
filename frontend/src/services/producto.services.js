import axiosConfig from '../configs/axios.config'

export const createProduct = (data, token) => {
  return axiosConfig.post('/api/productos', data, {
    headers: { authorization: `Bearer ${token}` }
  })
}

export const getProducts = () => {
  return axiosConfig.get('/api/productos')
}

export const updateProduct = (id, data, token) => {
  return axiosConfig.put(`/api/productos/${id}`, data, {
    headers: { authorization: `Bearer ${token}` }
  })
}
export const getProductById = id => {
  return axiosConfig.get(`/api/productos/${id}`)
}

export const deleteProduct = (id, token) => {
  return axiosConfig.delete(`/api/productos/${id}`, {
    headers: { authorization: `Bearer ${token}` }
  })
}
