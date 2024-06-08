import { Outlet } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"

Header
export default function AppLayout() {
  return (
    <>
        <Header/>
        <main>
            <p>This is the main</p>
            <Outlet/>
        </main>
        <CartOverview/>
    </>
  )
}
