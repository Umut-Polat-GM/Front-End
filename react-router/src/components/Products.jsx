import { NavLink, Outlet } from "react-router-dom"


const Products = () => {
  return (
    <div>
        <input type="text" placeholder="Search..." />
        <br />
        <NavLink to="features">Features</NavLink>
        <NavLink to="new">New Product</NavLink>
        <Outlet />
    </div>
  )
}

export default Products
