import Header from "../components/Header/Header"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <main className="max-w-screen-2xl mx-auto bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  )
}
