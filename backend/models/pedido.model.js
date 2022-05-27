import mongoose from 'mongoose'

const schemaPedido = new mongoose.Schema({
  fecha: {
    type: mongoose.Schema.types.Date,
    required: true
  },
  total: {
    type: mongoose.Schema.types.Decimal128,
    required: true
  },
  estado: {
    type: mongoose.Schema.types.String,
    enum: ['Pendiente', 'Enviado', 'Entregado', 'Cancelado'],
    default: 'Pendiente',
    required: true
  },
  cliente: {
    type: mongoose.Schema.types.objectId,
    ref: 'Cliente'
  },
  productos: {
    type: [mongoose.Schema.types.objectId],
    ref: 'Producto'
  }
})
export const pedidoModel = mongoose.model('Pedido', schemaPedido)
