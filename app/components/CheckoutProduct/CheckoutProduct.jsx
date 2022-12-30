'use client'
import Image from "next/image";
import { Context } from "../../../utils/Context/CartContext";
import { useContext } from "react";


export default function CheckoutProduct({id, title, price, description , category, image}) {

    const {removeFromCart} = useContext(Context)

    const eliminarCarrito = () => {
        removeFromCart(id);
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} alt="product" />

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={eliminarCarrito} className="button">Remove from Basket</button>
            </div>
        </div>
    );
}