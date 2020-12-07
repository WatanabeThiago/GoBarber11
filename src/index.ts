import express from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
    
})


app.listen(3333, () => console.log('🆗 [SERVIDOR] Rodando na porta 3333.'))