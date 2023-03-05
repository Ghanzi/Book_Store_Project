import {NavLink, Outlet } from "react-router-dom"

function ClientLayout(){
    return (

      <>
           <nav className={"  navbar navbar-expand-lg navbar-dark bg-dark justify-content-center"}>
            <ul className="navbar-nav text-center">
                <li className={"nav-item"}><NavLink className={"nav-link"} to={"/acceuil"}>Accueil</NavLink></li>
                <li  className={"nav-item"}><NavLink  className={"nav-link "} to={"/books"}>Livres</NavLink></li>
                  <li  className={"nav-item"}><NavLink className={"nav-link "} to={"/contact"}> Contact</NavLink></li>
            </ul>
            <form class="d-flex">
           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">chercher</button>
      </form>
        </nav>

        <Outlet/>
      </>
      
    )
}
export default ClientLayout