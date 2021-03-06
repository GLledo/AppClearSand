const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const beachSchema = new Schema({
  beachname:String,
  event: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }],
  Acceso_discapacitados: String,
  Actuaciones: String,
  Actuaciones_tipo: String,
  Alquiler_hamacas: String,
  Alquiler_nauticos: String,
  Alquiler_sombrillas: String,
  Anchura: String,
  Aparcamiento: String,
  Aseos: String,
  Auxilio_y_salvamento: String,
  Bandera_azul: String,
  Club_nautico: String,
  Composicion: String,
  Comunidad_Autonoma: String,
  Condiciones_bano: String,
  Coordenada_X:Number,
  Coordenada_Y:Number,
  Coordenada_geografica_Latitud: String,
  Coordenada_geografica_Longitud: String,
  Codigo_INE_Municipio: Number,
  Descripcion: String,
  Dirección_Hospital: String,
  Distancia_Hospital: String,
  Distancia_Puerto_Deportivo: String,
  Duchas: String,
  Espacio_protegido: String,
  Espacio_protegido_desc: String,
  Establecimiento_bebida: String,
  Establecimiento_comida:String,
  Fachada_Litoral: String,
  Forma_de_acceso: String,
  Grado_ocupacion: String,
  Grado_urbanizacion: String,
  Hospital: String,
  Huso: String,
  Id: Number,
  Identificador: Number,
  Isla: String,
  Lavapies: String,
  Longitud: String,
  Nombre: String,
  Nudismo: String,
  Observaciones: String,
  Oficina_turismo: String,
  Papelera: String,
  Paseo_maritimo: String,
  Provincia: String,
  Puerto_deportivo: String,
  Servicio_limpieza: String,
  Senalizacion_accesos: String,
  Senalizacion_peligro:String,
  Submarinismo: String,
  Telefono_Hospital: String,
  Telefonos: String,
  Tipo_de_arena: String,
  Termino_Municipal: String,
  Vegetacion: String,
  Web: String,
  Web_municipal: String,
  Web_puerto_deportivo: String,
  Zona_Surf: String,
  Zona_deportiva: String,
  Zona_fondeo_balizada: String,
  Zona_infantil: String,
  estado: String,
  urlImagen: String
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

module.exports = mongoose.model('Beach', beachSchema)
