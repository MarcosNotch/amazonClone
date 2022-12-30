import Image from "next/image";
import MoneyFormat from "../MoneyFormat/MoneyFormat";
import {StarIcon} from "@heroicons/react/24/solid";
import AddToBasketButton from "../AddToBasketButton/AddToBasketButton";

export default function Product({id, title, price, description , category, image}){

    const rating  = Math.floor(Math.random() * 5) + 1

    const hasPrime = Math.random() < 0.5


    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">

            <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">{category}</p>

            <div className="relative w-fullE h-52 flex flex-col content-center justify-center">
                <Image src={image} fill={true} className="object-contain self-center" alt="foto Producto" />
            </div>
            

            <h4 className="my-5">{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>

       

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <MoneyFormat value={price} />
            </div>
            
            {hasPrime &&
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="prime" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            }

            <AddToBasketButton id={id} title={title} price={price} description={description} category={category} image={image} />
        </div>
    )


}