import { Router } from 'express'
import { crearProducto } from '../controllers/producto.controller.js'
import { validarAdmin } from '../utils/validador.js'
export const productoRouter = Router()

productoRouter.route('/newproducto').post(validarAdmin, crearProducto)
