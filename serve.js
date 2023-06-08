import expres from "express";
const app = expres();

app.use(expres.json())
app.post('/pizzas',(req,res)=>{
    res.status(201).json(req.body)
})

const server = app.listen(8080);

async function postPizza(){
    const pizza = {
        name:'carbonrar'
    }
    const response = await fetch('http://localhost:8080/pizzas',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(pizza)
    })
    const data = await response.json();
    console.log(data)
}

postPizza();