import { createContext} from 'react';
 

let products = [
    {
        "id": 1,
        "name": "Carema",
        "photograph": require("./images/guitar.png"),
        "price": 14999,
        "subtotal": 14999,
        "quantity": 1
    },
    {
        "id": 2,
        "name": "AVFI Shoes",
        "photograph": require("./images/phone.webp"),
        "price": 45000,
        "subtotal": 45000,
        "quantity": 1
    },
    {
        "id": 3,
        "name": "Gaming Console",
        "photograph": require("./images/piano.png"),
        "price": 49000,
        "subtotal":49000,
        "quantity": 1
    },
    {
        "id": 4,
        "name": "Digital Watch",
        "photograph": require("./images/shoes1.jpg"),
        "price": 25000,
        "subtotal":25000,
        "quantity": 1
    },
    {
        "id": 5,
        "name": "Head Phone",
        "photograph": require("./images/wine1.jpg"),
        "price": 7699,
        "subtotal":7699,
        "quantity": 1
    },
    {
        "id": 6,
        "name": "Adidas Shoes",
        "photograph": require("./images/t-shirt2.jpg"),
        "price": 11000,
        "subtotal":11000,
        "quantity": 1
    },
    {
        "id": 7,
        "name": "Sunglass",
        "photograph": require("./images/shoes2.jpg"),
        "price": 3500,
        "subtotal":3500,
        "quantity": 1
    },
    {
        "id": 8,
        "name": "Watch",
        "photograph": require("./images/red-shoes.avif"),
        "price": 15000,
        "subtotal":15000,
        "quantity": 1
    }

];

export function getProducts() {
    return products;
}


export const cartContext = createContext();