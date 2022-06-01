import { ClienteService } from '../services/cliente.service.js'

export async function crearCliente (req, res) {
  try {
    const nuevoCliente = await ClienteService.signupCliente(req.body)
    res.status(201).json(nuevoCliente)
  } catch (error) {
    res.status(400).json({
      message: 'Error al crear el cliente',
      error: error.message
    })
  }
}
export async function loginCliente (req, res) {
  try {
    const { email, password } = req.body
    const cliente = await ClienteService.loginCliente(email, password)
    return res.status(200).json(cliente)
  } catch (error) {
    return res.status(400).json({
      message: 'Error al loguearse xd ',
      error: error.message
    })
  }
}
export async function actualizarCliente (req, res) {
  try {
    const cliente = await ClienteService.actualizarCliente(
      req.params.id,
      req.body
    )
    console.log(req.body, req.params.id)
    return res.status(200).json(cliente)
  } catch (error) {
    return res.status(400).json({
      message: 'Error al actualizar el cliente',
      error: error.message
    })
  }
}
export async function obtenerClientes (req, res) {
  try {
    const clientes = await ClienteService.obtenerClientes()
    return res.status(200).json(clientes)
  } catch (error) {
    return res.status(400).json({
      message: 'Error al obtener los clientes',
      error: error.message
    })
  }
}
