import mongoose from 'mongoose'

const schemaProducto = new mongoose.Schema(
  {
    nombre: {
      type: mongoose.Schema.Types.String,
      required: true
    },
    precio: {
      type: mongoose.Schema.Types.Decimal128,
      required: true,
      default: 0
    },
    descripcion: {
      type: mongoose.Schema.Types.String,
      required: true
    },
    imagen: {
      type: mongoose.Schema.Types.String,
      required: true
    },
    tipo: {
      type: mongoose.Schema.Types.String,
      enum: ['Plato', 'Bebida', 'Postre', 'Otro'],
      default: 'Otro',
      required: true
    },
    estado: {
      type: mongoose.Schema.Types.Boolean,
      default: true
    },
    administrador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Administrador'
    }
  },
  { timestamps: true }
)

export const productoModel = mongoose.model('Producto', schemaProducto)
