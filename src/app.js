import express from 'express'
const app = express()

app.listen(3000)
console.log('Server en puerto 3000')

app.get('/', (req, res)=>{
  res.send('Hola server')
})