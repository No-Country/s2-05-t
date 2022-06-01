import { ProductoService } from '../services/producto.service.js'

export async function crearProducto (req, res) {
  try {
    const nuevoProducto = await ProductoService.crearProducto(req.body)
    res.status(201).json(nuevoProducto)
  } catch (error) {
    res.status(500).json({
      message: 'Error al crear el producto',
      error: error.message
    })
  }
}

export async function actualizarProducto (req, res) {
  try {
    const producto = await ProductoService.actualizarProducto(
      req.params.id,
      req.body
    )
    res.status(200).json(producto)
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar el producto',
      error: error.message
    })
  }
}
