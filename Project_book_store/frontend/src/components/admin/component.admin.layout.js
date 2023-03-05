import {NavLink, Outlet } from "react-router-dom"

function AdminLayout(){
    return (
      <>
           <nav className={"navbar navbar-expand-sm bg-dark justify-content-center "}>
            <ul className="navbar-nav text-center">
                <li className={"nav-item"}><NavLink className={"nav-link text-white"} to={"/admin/aceuil"}>Accueil</NavLink></li>
                <li  className={"nav-item"}><NavLink  className={"nav-link text-white"} to={"/admin/books"}>Livres</NavLink></li>
                <li  className={"nav-item"}><NavLink className={"nav-link text-white"}  to={"/admin/categories"}>category</NavLink></li>
               
            </ul>
        </nav>
          <Outlet/>
      </>
    )
}
export default AdminLayout