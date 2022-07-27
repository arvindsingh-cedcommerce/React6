import { useState, createContext, useContext} from 'react';


let products = [
    {
        "id": 1,
        "name": "Carema",
        "photograph": require("./images/camera.avif"),
        "price": 14999,
        "subtotal": 14999,
        "quantity": 1
    },
    {
        "id": 2,
        "name": "AVFI Shoes",
        "photograph": require("./images/red-shoes.avif"),
        "price": 45000,
        "subtotal": 45000,
        "quantity": 1
    },
    {
        "id": 3,
        "name": "Gaming Console",
        "photograph": require("./images/console.avif"),
        "price": 49000,
        "subtotal":49000,
        "quantity": 1
    },
    {
        "id": 4,
        "name": "Digital Watch",
        "photograph": require("./images/digital-watch.avif"),
        "price": 25000,
        "subtotal":25000,
        "quantity": 1
    },
    {
        "id": 5,
        "name": "Head Phone",
        "photograph": require("./images/headphone.avif"),
        "price": 7699,
        "subtotal":7699,
        "quantity": 1
    },
    {
        "id": 6,
        "name": "Adidas Shoes",
        "photograph": require("./images/shoes.avif"),
        "price": 11000,
        "subtotal":11000,
        "quantity": 1
    },
    {
        "id": 7,
        "name": "Sunglass",
        "photograph": require("./images/sunglass.avif"),
        "price": 3500,
        "subtotal":3500,
        "quantity": 1
    },
    {
        "id": 8,
        "name": "Watch",
        "photograph": require("./images/watch.avif"),
        "price": 15000,
        "subtotal":15000,
        "quantity": 1
    }

];

export function getProducts() {
    return products;
}


export const cartContext = createContext();