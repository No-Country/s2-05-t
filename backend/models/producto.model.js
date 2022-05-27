import mongoose from 'mongoose'

const schemaProducto = new mongoose.Schema({
  nombre: {
    type: mongoose.Schema.types.String,
    required: true
  },
  precio: {
    type: mongoose.Schema.types.Decimal128,
    required: true,
    default: 0
  },
  descripcion: {
    type: mongoose.Schema.types.String,
    required: true
  },
  imagen: {
    type: mongoose.Schema.types.String,
    required: true
  },
  tipo: {
    type: mongoose.Schema.types.String,
    enum: ['Plato', 'Bebida', 'Postre', 'Otro'],
    default: 'Otro',
    required: true
  },
  estado: {
    type: mongoose.Schema.types.Boolean,
    default: true
  },
  administrador: {
    type: mongoose.Schema.types.objectId,
    ref: 'Administrador'
  }
})

export const productoModel = mongoose.model('Producto', schemaProducto)
