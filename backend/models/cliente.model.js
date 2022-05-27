import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const schemaCliente = new mongoose.Schema({
    nombre:{
        type: mongoose.Schema.types.String,
        required: true
    },  
    apellido:{
        type: mongoose.Schema.types.String,
        required: true
    },
    email:{
        type: mongoose.Schema.types.String,
        required: true
    },
    password:{
        type: mongoose.Schema.types.String,
        required: true
        set : function(password){
            return bcrypt.hashSync(password, 10);
        }
    },
    fechaNacimiento:{
        type: mongoose.Schema.types.Date,
        required: true
    },
    pedido:{
        type:[ mongoose.Schema.types.objectId],
        ref: 'Pedido'
    }

    }
);
export const clienteModel = mongoose.model('Cliente', schemaCliente);
    