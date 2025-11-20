import express, { request, response } from 'express'

const app = express()

app.get('/usuarios', (request, response)=>{
  app.send('Ok, deu certo')
})

app.listen(3000)