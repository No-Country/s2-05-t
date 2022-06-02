import { pedidoModel } from '../models/pedido.model.js'
import { clienteModel } from '../models/cliente.model.js'
export class PedidoService {
  static async crearPedido (pedido) {
    try {
      const nuevoPedido = await pedidoModel.create(pedido)
      const cliente = await clienteModel.findByIdAndUpdate(pedido.cliente, {
        $push: { pedidos: nuevoPedido._id }
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
      const { estado } = data
      const usuario = await clienteModel.findById(data.cliente)
      console.log(usuario)
      if (usuario && estado && estado != 'CANCELADO') {
        throw new Error('No puedes actualizar el estado a ese como cliente')
      }
      console.log(data)
      const estadosAdmin = ['PENDIENTE', 'ENVIADO', 'ENTREGADO', 'CANCELADO']
      if (estado) {
        if (!estadosAdmin.includes(estado)) {
          throw new Error('El estado no es válido')
        }
      }
      const pedido = await pedidoModel.findByIdAndUpdate(id, data)
      if (!pedido) throw new Error('El pedido no existe')
      const pedidoActualizado = await pedidoModel.findById(id)
      return pedidoActualizado
    } catch (error) {
      throw new Error(error.message)
    }
  }
  static async obtenerPedidos () {
    try {
      const pedidos = await pedidoModel.find().populate('cliente')
      return pedidos
    } catch (error) {
      throw new Error(error.message)
    }
  }
  static async obtenerPedidoId (id) {
    try {
      const pedido = await pedidoModel
        .findById(id)
        .populate('cliente', {
          nombre: 1,
          apellido: 1,
          email: 1
        })
        .populate('productos', {
          nombre: 1,
          precio: 1,
          imagen: 1
        })
      return pedido
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
