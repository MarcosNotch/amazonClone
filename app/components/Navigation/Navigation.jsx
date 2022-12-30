import {Bars3Icon}  from "@heroicons/react/24/outline"

export default function Navigation() {
  return (
    <nav>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm ">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Music</p>
        <p className="link">Videogames</p>
        <p className="link">Books & Drugs</p>
        <p className="hidden md:inline">Electronicos</p>
      </div>
    </nav>
  )
}