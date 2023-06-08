import { json } from "express";

const baseUrl = 'http://localhost:8080'

export async function getPizzas() {   
    const response = await fetch(`${baseUrl}/pizzas`, {
        method: 'GET',        
    })
    const data = await response.json();
    const {status} = response;
    console.log({
        method:'GET',
        status,
        data
    })
}

export async function postPizza() {
    const pizza = {
        name: 'carbonara'
    }
    const response = await fetch(`${baseUrl}/pizzas`, {
        method: 'POST',
        
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(pizza)
    })
    const data = await response.json();
    const {status} = response;
    console.log({
        method:'POST',
        status,
        data
    })
}


export async function getPizza(id) {   
    const response = await fetch(`${baseUrl}/pizzas/${id}`, {
        method: 'GET',        
    })
    const data = await response.json();
    const {status} = response;
    console.log({
        method:'GET',
        status,
        data
    })
}

export async function deletePizza(id) {   
    const response = await fetch(`${baseUrl}/pizzas/${id}`, {
        method: 'DELETE',        
    })   
    const {status} = response;
    console.log({
        method:'DELETE',
        status,        
    })
}

export async function upatePizza(pizza) {   
    const id = pizza
    const response = await fetch(`${baseUrl}/pizzas/${id}`, {
        method: 'PUT',        
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(pizza)
    })   
    const {status} = response;
    console.log({
        method:'PUT',
        status,        
    })
}