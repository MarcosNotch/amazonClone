'use client'

import Link from "next/link";
import {ShoppingCartIcon} from "@heroicons/react/24/outline"
import { Context } from "../../../utils/Context/CartContext";
import { useContext } from "react";

export default function ShoppingCart(){

    const {getCartQuantity} = useContext(Context)
    const cartQuantity = getCartQuantity()

    return (
        <Link href="/checkout">
        <div className="link relative flex items-center"> 
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{cartQuantity}</span>
            <ShoppingCartIcon className="h-10" />
            <p className=" hidden md:inline font-extrabold md:text-sm mt-2">Carrito</p>
        </div>
     </Link>
    )
}