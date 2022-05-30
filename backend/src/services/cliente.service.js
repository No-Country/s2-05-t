import { clienteModel } from '../models/cliente.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export class ClienteService {
  static async signupCliente (data) {
    try {
      const nuevoCliente = clienteModel.create(data)
      return nuevoCliente
    } catch (error) {
      return {
        message: 'Error al crear el cliente',
        error: error.message
      }
    }
  }
  static async loginCliente (email, password) {
    try {
      const cliente = await clienteModel.findOne({ email })
      if (!cliente) {
        return {
          message: 'El cliente no existe'
        }
      }
      const validPassword = bcrypt.compareSync(password, cliente.password)
      if (!validPassword) {
        return {
          message: 'La contraseña no es correcta'
        }
      }
      const token = jwt.sign(
        {
          id: cliente._id,
          email: cliente.email,
          nombre: cliente.nombre,
          apellido: cliente.apellido
        },
        process.env.SECRET_JWT,
        {
          expiresIn: '5h'
        }
      )
      return {
        message: 'Login correcto',
        token
      }
    } catch (error) {
      return {
        message: 'Error al loguearse',
        error: error.message
      }
    }
  }
  static async actualizarCliente (id, data) {
    try {
      const cliente = await clienteModel.findByIdAndUpdate(id, data)
      return cliente
    } catch (error) {
      return {
        message: 'Error al actualizar el cliente',
        error: error.message
      }
    }
  }
  static async eliminarCliente (id) {
    try {
      const cliente = await clienteModel.findByIdAndDelete(id)
      return cliente
    } catch (error) {
      return {
        message: 'Error al eliminar el cliente',
        error: error.message
      }
    }
  }
  static async obtenerClientes () {
    try {
      const clientes = await clienteModel.find()
      return clientes
    } catch (error) {
      return {
        message: 'Error al obtener los clientes',
        error: error.message
      }
    }
  }

  static async obtenerClienteId (id) {
    try {
      const clientes = await clienteModel.findById(id).populate('Pedido', {
        _id: 1,
        fecha: 1,
        total: 1,
        productos: 1
      })
      return clientes
    } catch (error) {
      return {
        message: 'Error al obtener los clientes',
        error: error.message
      }
    }
  }
}
