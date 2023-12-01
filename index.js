/*
Ejemplo hecho con broker EMQX
*/
const mqtt = require('mqtt')
const clientId = 'emqx_nodejs_' + Math.random().toString(16).substring(2, 8)
const username = 'Rodri'
const password = 'NodeJS'

// conectar cliente a broker
const client = mqtt.connect('mqtt://broker.emqx.io:1883', {
  clientId,
  username,
  password,
  // ...other options
})

// subscribir a un topico - publicar un mensaje - recibir mensaje del broker
const topic = 'posicion/lugar' // '/posicion/lugar'
const payload = 'conectado'
const qos = 0
// suscribirse a topico
client.subscribe(topic, { qos }, (error) => {
  if (error) {
    console.log('subscribe error:', error)
    return
  }
  console.log(`Suscripcion exitosa a topico: '${topic}'`)
  alert("Suscripcion exitosa a topico: '${topic}'")
})
// publicar mensaje
client.publish(topic, payload, { qos }, (error) => {
  if (error) {
    console.error(error)
  }
})
// recibir mensaje
client.on('message', (topic, payload) => {
    console.log('Mensaje recibido:', topic, payload.toString())
    alert("Mensaje recibido:", topic, payload.toString())
})