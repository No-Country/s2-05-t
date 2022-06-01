import { administradorModel } from '../models/administrador.model.js'

export class AdministradorService {
  static async crearAdministrador (administrador) {
    try {
      const nuevoAdministrador = await administradorModel.create(administrador)
      return nuevoAdministrador
    } catch (error) {
      return {
        message: 'Error al crear el administrador',
        error: error.message
      }
    }
  }

  static async actualizarAdministrador (id, data) {
    try {
      const administrador = await administradorModel.findByIdAndUpdate(id, data)
      return administrador
    } catch (error) {
      return {
        message: 'Error al actualizar el administrador',
        error: error.message
      }
    }
  }

  static async obtenerAdministradores () {
    try {
      const administradores = await administradorModel.find()
      return administradores
    } catch (error) {
      return {
        message: 'Error al obtener los administradores',
        error: error.message
      }
    }
  }

  static async obtenerAdministradorId (id) {
    try {
      const administrador = await administradorModel.findById(id)
      return administrador
    } catch (error) {
      return {
        message: 'Error al obtener el administrador',
        error: error.message
      }
    }
  }
}
