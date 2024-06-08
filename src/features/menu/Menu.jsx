import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem"

function Menu() {
  const menu = useLoaderData();
 
  return (
    <ul>
      {menu.map((pizza,id) => <MenuItem pizza={pizza} key={id}/>)}
    </ul>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function load(){
  const menu = await getMenu()
  return  menu
}

export default Menu;
