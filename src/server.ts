import express from 'express'
import './database/connect'
import 'reflect-metadata'
import routes from './routes'
const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log('🆗 [SERVIDOR] Iniciado com sucesso na porta 3333.'))