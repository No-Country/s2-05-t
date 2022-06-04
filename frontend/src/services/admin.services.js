import axiosConfig from '../configs/axios.config'

export const createAdmin = data => {
  return axiosConfig.post('/api/newadmin', data)
}

export const loginAdmin = data => {
  return axiosConfig.post('/api/loginadmin', data)
}
