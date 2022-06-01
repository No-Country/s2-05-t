import { AdministradorService } from '../services/administrador.service.js'

export async function crearAdministrador (req, res) {
  try {
    const nuevoAdministrador = await AdministradorService.crearAdministrador(
      req.body
    )
    res.status(201).json(nuevoAdministrador)
  } catch (error) {
    res.status(500).json({
      message: 'Error al crear el administrador',
      error: error.message
    })
  }
}

export async function actualizarAdministrador (req, res) {
  try {
    const administrador = await AdministradorService.actualizarAdministrador(
      req.params.id,
      req.body
    )
    res.status(200).json(administrador)
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar el administrador',
      error: error.message
    })
  }
}
