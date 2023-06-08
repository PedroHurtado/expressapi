import expres from "express";
import { deletePizza, getPizza, getPizzas, postPizza, upatePizza } from './client.js'

const app = expres();

app.use(expres.json())

app.post('/pizzas', (req, res) => {
    res.status(201).json(req.body)
})

app.get('/pizzas/:id', (req, res) => {
    res.status(200).json({
        id: req.params.id,
        name: 'carbonara'
    })
})

app.get('/pizzas', (req, res) => {
    res.status(200).json([{
        id: req.params.id,
        name: 'carbonara'
    }])
})



app.put('/pizzas/:id', (req, res) => {
    console.log('put server', req.body)
    res.status(204).end("")
})

app.delete('/pizzas/:id', (req, res) => {

    console.log('delete server', req.params.id)
    res.status(204).end("")
})

const server = app.listen(8080);
(async () => {
    await postPizza();
    await getPizzas();
    await getPizza(1);
    await deletePizza(1);
    await upatePizza({
        id: 1,
        name: 'carbonara'
    })
})();

