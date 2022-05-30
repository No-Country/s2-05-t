import mongoose from 'mongoose'

const schemaPedido = new mongoose.Schema(
  {
    fecha: {
      type: mongoose.Schema.Types.Date,
      required: true
    },
    total: {
      type: mongoose.Schema.Types.Decimal128,
      required: true
    },
    estado: {
      type: mongoose.Schema.Types.String,
      enum: ['Pendiente', 'Enviado', 'Entregado', 'Cancelado'],
      default: 'Pendiente'
    },
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cliente'
    },
    productos: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Producto'
    }
  },
  { timestamps: true }
)
export const pedidoModel = mongoose.model('Pedido', schemaPedido)
