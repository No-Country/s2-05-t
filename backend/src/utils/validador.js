import jwt from 'jsonwebtoken'
import { clienteModel } from '../models/cliente.model.js'

export function verificarToken (token) {
  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT)
    return payload
  } catch (error) {
    return error
  }
}

export async function validarUsuario (req, res, next) {
  // middleware
  // es un intermediario entre el cliente y el controlador final
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Se necesita una token para realizar esta solicitud'
    })
  }

  const token = req.headers.authorization.split(' ')[1]

  const resultado = verificarToken(token)

  if (resultado instanceof jwt.JsonWebTokenError) {
    return res.status(403).json({
      message: 'La token es invalida, intente nuevamente',
      razon: resultado.message
    })
  }

  console.log(resultado)

  const { id } = await clienteModel.findById(resultado.id)
  // como ya tengo el id (resultado.id) del usuario ahora buscaremos ese usuario en la bd y lo agregaremos al req.user

  req.body = { ...req.body, cliente: id }

  console.log(req.body)
  next()
}
