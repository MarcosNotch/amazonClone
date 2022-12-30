'use client'
import Image from "next/image";
import { Context } from "../../../utils/Context/CartContext";
import { useContext } from "react";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";

export default function Checkout() {

    const {carrito} = useContext(Context);

    return (
        <div className="bg-gray-100">

            <div >

                <div className="flex-grow m-5 shadow-sm">
                    <Image src="https://links.papareact.com/ikj" width={1250} height={250} className="object-contain" alt="ads" />
                </div>


                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="text-3xl border-b pb-4">Shopping Basket</h1>

                    {carrito.map((item, i) => (
                        <CheckoutProduct key={i} id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image} />
                    ))}

                </div>

            </div>

            <div>

            </div>
        </div>
    )
}