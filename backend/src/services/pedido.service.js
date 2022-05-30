import { pedidoModel } from '../models/pedido.model.js'
import { clienteModel } from '../models/cliente.model.js'
export class PedidoService {
  static async crearPedido (pedido) {
    try {
      const nuevoPedido = await pedidoModel.create(pedido)
      const cliente = await clienteModel.findByIdAndUpdate(pedido.cliente, {
        $push: { pedido: nuevoPedido._id }
      })
      console.log(cliente)

      return nuevoPedido
    } catch (error) {
      return {
        message: 'Error al crear el pedido',
        error: error.message
      }
    }
  }
  static async actualizarPedido (id, data) {
    try {
      const pedido = await pedidoModel.findByIdAndUpdate(id, data)
      return pedido
    } catch (error) {
      return {
        message: 'Error al actualizar el pedido',
        error: error.message
      }
    }
  }
  static async obtenerPedidos () {
    try {
      const pedidos = await pedidoModel.find()
      return pedidos
    } catch (error) {
      return {
        message: 'Error al obtener los pedidos',
        error: error.message
      }
    }
  }
  static async obtenerPedidoId (id) {
    try {
      const pedido = await pedidoModel.findById(id).pupulate('Cliente', {
        _id: 1,
        nombre: 1,
        apellido: 1,
        email: 1
      })
      return pedido
    } catch (error) {
      return {
        message: 'Error al obtener el pedido',
        error: error.message
      }
    }
  }
}
