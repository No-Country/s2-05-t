import { productoModel } from '../models/producto.model.js'

export class ProductoService {
  static async crearProducto (producto) {
    try {
      const nuevoProducto = await productoModel.create(producto)
      return nuevoProducto
    } catch (error) {
      return {
        message: 'Error al crear el producto',
        error: error.message
      }
    }
  }

  static async actualizarProducto (id, data) {
    try {
      const producto = await productoModel.findByIdAndUpdate(id, data)
      return producto
    } catch (error) {
      return {
        message: 'Error al actualizar el producto',
        error: error.message
      }
    }
  }

  static async obtenerProductos () {
    try {
      const productos = await productoModel.find()
      return productos
    } catch (error) {
      return {
        message: 'Error al obtener los productos',
        error: error.message
      }
    }
  }

  static async obtenerProductoId (id) {
    try {
      const producto = await productoModel.findById(id)
      return producto
    } catch (error) {
      return {
        message: 'Error al obtener el producto',
        error: error.message
      }
    }
  }
}
