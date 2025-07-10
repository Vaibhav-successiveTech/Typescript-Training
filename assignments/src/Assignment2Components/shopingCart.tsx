'use client';
import { useState, createContext, useContext } from "react"
import { Button } from "@mui/material";

type CartItem = {
    id: number,
    Quantity: number,
    Price: number
}

type Cart = {
    items: CartItem[],
    setItems: any
}

type Product = {
    id: number,
    desc: string,
    price: number
}

const ProductList: Product[] = [
    {
        id: 1,
        desc: 'Product1',
        price: 100
    },
    {
        id: 2,
        desc: 'Product2',
        price: 200
    },
    {
        id: 3,
        desc: 'Product3',
        price: 300
    },
    {
        id: 4,
        desc: 'Product4',
        price: 400
    },
]

const CartContext = createContext<Cart>({ items: [], setItems: () => { } });

const ChildCartComponent = () => {
    const { items, setItems } = useContext(CartContext);
    return (
        <>
            {
                items.map((i) => {
                    return (
                        <>
                            <h3> id : {i.id} </h3>
                            <h3> Quantity :{i.Quantity} </h3>
                            <h3> Price : {i.Price} </h3>
                            <Button variant="outlined" onClick={() => {
                                setItems(items.filter((ele) => {
                                    return ele.id != i.id;
                                }))
                            }}> Remove From Cart </Button >
                        </>
                    );
                })
            }
        </>
    );
}

const ParentCartComponent = () => {
    const [cartList, setCartList] = useState<CartItem[]>([]);
    const newCart: Cart = {
        items: cartList,
        setItems: setCartList
    }
    return (
        <>
            <h2>Cart</h2>
            <CartContext.Provider value={newCart}>
                <ChildCartComponent />
            </CartContext.Provider>

            <br />
            <br />

            {
                <>
                    <h2> Products </h2>
                    {
                        ProductList.map((i) => {
                            return (
                                <>
                                    <p> Id : {i.id} </p>
                                    <p> Description : {i.desc} </p>
                                    <p> Price : {i.price} </p>
                                    <Button size="small" variant="outlined" onClick={() => {
                                        let newList: CartItem[] = [];

                                        let item: CartItem = {
                                            id: i.id,
                                            Quantity: 1,
                                            Price: i.price
                                        };

                                        for (let ele of cartList) {

                                            if (ele.id == i.id) {
                                                item.Quantity += ele.Quantity;
                                            }
                                        }

                                        for (let ele of cartList) {

                                            if (ele.id == item.id) continue;
                                            else newList.push(ele);
                                            
                                        }
                                        newList.push(item);
                                        newList.sort((a,b)=>a.id-b.id);
                                        setCartList(newList);
                                    }}> Add to Cart </Button>
                                </>
                            );
                        })
                    }
                </>
            }

        </>
    );
}

export default ParentCartComponent;