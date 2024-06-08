import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"


function Header() {
  return (
    <nav>
        <Link to="/">Fast React Pizza Co.ltd </Link>
        <p>Jonas</p>
        <SearchOrder/>
    </nav>
  )
}

export default Header