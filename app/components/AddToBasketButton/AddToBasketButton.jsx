'use client'
import {  useContext} from "react";
import { Context } from "../../../utils/Context/CartContext";

export default function AddToBasketButton({id, title, price, description , category, image}) {

    const {addToCart} = useContext(Context)

    const agregarCarrito = () => {
        addToCart({id, title, price, description , category, image});
    }

    return (
        <button onClick={agregarCarrito} className="mt-auto button">
            Add to Basket
        </button>
    );
}