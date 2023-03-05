import {useEffect, useState}from 'react'
import { Link } from "react-router-dom"
import { deleteBook, getAllBooks } from "../../services/books_service"

function BookList(){
    const [books,setBooks]=useState([])
     useEffect(()=>{
        getBooks()
     },[])
     async function getBooks(){
        const result= await getAllBooks()
        setBooks(result.data)
     }
     async function delBook(id){
         await deleteBook(id)
         getBooks()
     }
    
    return(
          <div className="{container}">
            
              <table className={"table  table-bordred table-hover table-striped"}>
              <thead className="{bg-dark">
              <tr>
                <th>N</th>
                <th>Nom</th>
                <th>Description</th>
                <th>Auteur</th>
                <th>Action</th>
            </tr>
              </thead>
             <tbody>
            {
                books.map((elem,index)=>{
                    return ( 
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{elem.name}</td>
                        <td>{elem.description}</td>
                        <td>{elem.auteur}</td>
                        <td> 
                            <button onClick={event=>delBook(elem._id)} className={"btn btn-danger"}>Sup</button>
                           <Link className={"m-3 btn btn-primary"}to={"/admin/books/new"}> < button >Ajout</button></Link>
                           <Link className={"m-3 btn btn-primary"}to={"/admin/books/edit"}> < button >Edit</button></Link>
                           
                           
                        </td>

                    </tr>
                    )
                })
            }
               </tbody>
        </table>
          </div>
    )
}
export default BookList