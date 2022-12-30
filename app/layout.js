import '../styles/globals.css'
import CartProvider from '../utils/Context/CartContext'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
