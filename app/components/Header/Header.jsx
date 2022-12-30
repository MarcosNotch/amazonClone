import Image from "next/image"
import {MenuIcon, MagnifyingGlassIcon, ShoppingCartIcon} from "@heroicons/react/24/outline"
import SearchBox from "../SearchBox/SearchBox"
import Navigation from "../Navigation/Navigation"
import SignIn from "../SignInButton/SignInButton"
import Link from 'next/link';
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function Header() {

  return (
    <header>
        <div className="flex items-center bg-amazon_blue flex-grow px-2 py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 mx-6">
                <Link href="/">
                    <Image src="https://links.papareact.com/f90" alt="logo" width={100} height={100} className="object-contain cursor-pointer"/>
                </Link>
            </div>

            <SearchBox />
      
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <SignIn />
                <div className="link">
                    <p>
                        Devoluciones
                    </p>
                    <p className="font-extrabold md:text-sm">
                        & Pedidos
                    </p>
                </div>
             
               <ShoppingCart />
               
            </div>
        </div>
        
        <Navigation />
    </header>
  )
}