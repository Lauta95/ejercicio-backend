
import express from "express"

const app = express();

const frase = 'practicando backend en el after con arturito'

app.get('/', (req, res) => {
    res.send('hola')
})

app.get('/api/frase', (req, res) => {
    res.send({ frase })
})

app.get('/api/palabra/:pos', (req, res) => {

    const pos = req.params.pos

    const lista = frase.split(' ')

    const palabra = lista[pos - 1]

    res.send({ palabra })
})

app.listen(8080, () => console.log('corriendo server...'));