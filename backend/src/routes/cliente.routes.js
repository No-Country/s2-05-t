import { Router } from 'express'
import {
  crearCliente,
  loginCliente,
  actualizarCliente,
  obtenerClientes
} from '../controllers/cliente.controller.js'

export const clienteRouter = Router()

clienteRouter.post('/signup', crearCliente)
clienteRouter.post('/signin', loginCliente)
clienteRouter.put('/cliente/:id', actualizarCliente)
clienteRouter.get('/clientes', obtenerClientes)
