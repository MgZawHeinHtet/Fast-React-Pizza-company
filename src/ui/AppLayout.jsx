import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"
import Loader from "./Loader";

Header
export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading"

  return (
    <div className="layout">
      {isLoading && <Loader/>}
        <Header/>
        <main>
            <p>This is the main</p>
            <Outlet/>
        </main>
        <CartOverview/>
    </div>
  )
}
