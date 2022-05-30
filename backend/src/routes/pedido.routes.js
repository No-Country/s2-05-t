import { Router } from 'express'
import { crearPedido } from '../controllers/pedido.controller.js'
import { validarUsuario } from '../utils/validador.js'
export const pedidoRouter = Router()

pedidoRouter.route('/newpedido').post(validarUsuario, crearPedido)
